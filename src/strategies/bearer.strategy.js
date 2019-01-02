const Strategy = require('passport-http-bearer').Strategy;
const request = require('superagent');
const env = require('var');

/**
 * Bearer Strategy --
 * Simple strategy to hijack the Bearer Token and use it as the context
 * to supply to the services.  This is required so the shim can proxy
 * requests from the originating client to the backend FHIR server.
 *
 *
 * Requires ENV variables for introspecting the token
 */
module.exports.strategy = new Strategy(
    function(token, done) {
    if (!token){
      return done(new Error('Null token provided for authentication'));
    }

    // If there isn't an introspection url provide a local means
    // to inspect the token if possible, set the context to the token so it is
    // available to the services
    if (!env.INTROSPECTION_URL) {
      let context = {token};
      let scope = 'patient/*.read, procedure/*.read, condition/*.read, organization/*.read';
      let user = {scope, context};
			return done(null, user, {scope, context});
		}

    // CLIENT_ID and CLIENT_SECRET must match those of the client that this
    // shim is proxing for.
		request
		.post(env.INTROSPECTION_URL)
		.set('content-type', 'application/x-www-form-urlencoded')
		.send({token: token, client_id: env.CLIENT_ID, client_secret: env.CLIENT_SECRET})
		.then((introspectionResponse) => {
			const decoded_token = introspectionResponse.body;

			if (decoded_token.active) {
				// TODO: context could come in many forms, you need to decide how to handle it.
				// it could also be decodedToken.patient etc...
				let { scope, context, sub, user_id } = decoded_token;
				let user = {user_id, sub};
        let dcontext = {context, token};
				// return scopes and context.  Both required
				return done(null, user, {scope, dcontext});
			}

			// default return unauthorized
			return done(new Error('Invalid token'));
		});
	}
);
