const FHIRServer = require('@asymmetrik/node-fhir-server-core');
const auth = require('./auth/auth_controller')
const {
	fhirServerConfig
} = require('./config');

let main = function () {

	let server = new FHIRServer.Server(fhirServerConfig);

  server.app.use("/auth",auth(server) );
  server.configureMiddleware()
		.configureSession()
		.configureHelmet()
		.configurePassport()
		.setPublicDirectory()
		.setProfileRoutes()
		.setErrorRoutes()
  //console.log(server.app._router.stack);
	server.logger.info('FHIR Server successfully validated.');
	// Start our server
	server.listen(3001, () =>
		server.logger.info('FHIR Server listening on localhost:' + 3001)

	);
};

main();
