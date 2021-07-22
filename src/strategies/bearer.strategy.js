const { Strategy } = require('passport-http-bearer');
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
module.exports.strategy = new Strategy((token, done) => {
  if (!token) {
    return done(new Error('Null token provided for authentication'));
  }

  // If there isn't an introspection url provide a local means
  // to inspect the token if possible, set the context to the token so it is
  // available to the services
  if (!env.INTROSPECTION_URL) {
    const context = { token };
    const scope = 'patient/*.read, user/*.read';
    const user = { scope, context };
    return done(null, user, { scope, context });
  }

  // CLIENT_ID and CLIENT_SECRET must match those of the client that this
  // shim is proxing for.
  return request
    .post(env.INTROSPECTION_URL)
    .set('content-type', 'application/x-www-form-urlencoded')
    .send({ token, client_id: env.CLIENT_ID, client_secret: env.CLIENT_SECRET })
    .then((introspectionResponse) => {
      const decodedToken = introspectionResponse.body;

      if (decodedToken.active) {
        // TODO: context could come in many forms, you need to decide how to handle it.
        // it could also be decodedToken.patient etc...
        const { scope, context, sub, userId } = decodedToken;
        const user = { userId, sub };
        const dcontext = { context, token };
        // return scopes and context.  Both required
        return done(null, user, { scope, dcontext });
      }

      // default return unauthorized
      return done(new Error('Invalid token'));
    });
});
