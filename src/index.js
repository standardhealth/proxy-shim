const { initialize, loggers } = require('@asymmetrik/node-fhir-server-core');
const logger = loggers.get('default');
const auth = require('./auth/auth_controller');
// the config object is immutable by default.  This causes a problem because hte
// FHIRServer initialize routine modifies the config structure and will fail to
// start if it cannot modify the structure
// process.env.ALLOW_CONFIG_MUTATIONS = false;

const config = require('config');

let fhirServerConfig = config.get('fhirServerConfig');
// TODO: resolve incompatibilities between node-config and asymmetrik fhir
// node-config adds ["get","has","util"] to config object prototypes
// which causes an error to be thrown in fhir server config profile validation
// (because config['has'] is missing things that a correctly configured profile would have)
fhirServerConfig = JSON.parse(JSON.stringify(fhirServerConfig));

const main = function () {

	const server = initialize(fhirServerConfig);
  const port = fhirServerConfig.server.port;
  // add the auth component to the server application
  server.app.use('/auth', auth(server) );
  server.configureMiddleware()
		.configureSession()
		.configureHelmet()
		.configurePassport()
		.setPublicDirectory()
		.setProfileRoutes()
		.setErrorRoutes();
	logger.info('FHIR Server successfully validated.');
	// Start our server
	server.listen(port, () =>
		logger.info('FHIR Server listening on localhost:' + port)

	);
  return server.app;
};

module.exports = main();
