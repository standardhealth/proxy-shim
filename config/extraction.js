const { constants } = require('@asymmetrik/node-fhir-server-core');
const { raw } = require('config/raw');

const { VERSIONS } = constants;

const extractionConfig = raw({
  server: {
    // support various ENV that uses PORT vs SERVER_PORT
    port: 3001,
    // allow Access-Control-Allow-Origin
    corsOptions: {
      maxAge: 86400,
      origin: '*',
    },
  },
  logging: {
    level: 'debug',
  },

  profiles: {
    Observation: {
      service: './src/services/extraction/observation.service.js',
      versions: [VERSIONS['4_0_0']],
    },
  },
});

module.exports = {
  extractionConfig,
};
