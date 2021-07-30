const { initialize, loggers } = require('@asymmetrik/node-fhir-server-core');
const config = require('config');

const logger = loggers.get('default');

const extractionConfig = config.get('extractionConfig');

const main = () => {
  const server = initialize(extractionConfig);
  const { port } = extractionConfig.server;

  logger.info('FHIR Server successfully validated.');
  server.listen(port, () => logger.info(`FHIR Server listening on localhost:${port}`));

  return server.app;
};

module.exports = main();
