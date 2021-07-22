const { Server, loggers } = require('@asymmetrik/node-fhir-server-core');
const config = require('config');
const auth = require('./auth/auth_controller');
// the config object is immutable by default.  This causes a problem because hte
// FHIRServer initialize routine modifies the config structure and will fail to
// start if it cannot modify the structure
process.env.ALLOW_CONFIG_MUTATIONS = true;

const logger = loggers.get('default');

const fhirServerConfig = config.get('fhirServerConfig').resolve();

const main = () => {
  const server = new Server(fhirServerConfig);
  const { port } = fhirServerConfig.server;
  // add the auth component to the server application
  server.app.use('/auth', auth(server));
  server
    .configureMiddleware()
    .configureSession()
    .configureHelmet()
    .configurePassport()
    .setPublicDirectory()
    .setProfileRoutes()
    .setErrorRoutes();
  logger.info('FHIR Server successfully validated.');
  // Start our server
  server.listen(port, () => logger.info(`FHIR Server listening on localhost:${port}`));
  return server.app;
};

module.exports = main();
