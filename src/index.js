const FHIRServer = require('@asymmetrik/node-fhir-server-core');

const auth = require('./auth/auth_controller');
// the config object is immutable by default.  This causes a problem because hte
// FHIRServer initialize routine modifies the config structure and will fail to
// start if it cannot modify the structure
process.env.ALLOW_CONFIG_MUTATIONS = true;

const config = require('config');

const fhirServerConfig = config.get('fhirServerConfig');

let main = function () {

	let server = new FHIRServer.Server(fhirServerConfig);
  let port = fhirServerConfig.server.port;
  // add the auth component to the server application
  server.app.use('/auth', auth(server) );
  server.configureMiddleware()
		.configureSession()
		.configureHelmet()
		.configurePassport()
		.setPublicDirectory()
		.setProfileRoutes()
		.setErrorRoutes();
  //console.log(server.app._router.stack);
	server.logger.info('FHIR Server successfully validated.');
	// Start our server
	server.listen(port, () =>
		server.logger.info('FHIR Server listening on localhost:' + port)

	);
  return server.app;
};

module.exports = main();
