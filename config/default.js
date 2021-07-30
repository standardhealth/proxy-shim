const { constants } = require('@asymmetrik/node-fhir-server-core');
const { raw } = require('config/raw');

const { VERSIONS } = constants;

const fhirClientConfig = {
  baseUrl: 'http://localhost',
  debug: true,
};

// note this has to be raw()-ified to prevent config from adding helper functions in config.profiles (has, get)
// since those helper functions cause errors in the fhir server configuration
// (ie, they get validated as if they were profiles, which they are not)
const fhirServerConfig = raw({
  auth: {
    // This servers URI
    resourceServer: 'http://localhost:3001',
    strategy: {
      name: 'bearer',
      useSession: false,
      service: './src/strategies/bearer.strategy.js',
    },
  },
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
  //
  // If you want to set up conformance statement with security enabled
  // Uncomment the following block
  //
  security: [
    {
      url: 'authorize',
      valueUri: 'http://localhost:3001/auth/authorize',
    },
    {
      url: 'token',
      valueUri: 'http://localhost:3001/auth/token',
    },
    // optional - registration
  ],

  //
  // Comment out any profiles you do not wish to support.  Each profile can support multiple versions
  // if supported by core.  We currently only have 3_0_1 profiles but will soon support DSTU2 and R4 versions.
  // Once available, to support multiple versions, just add the versions to the array.
  //
  // Example:
  // [RESOURCES.ACCOUNT]: {
  //		service: './src/services/account.service.js',
  //		versions: [ VERSIONS['3_0_1'], VERSIONS['1_0_2'] ]
  // },
  //
  // profiles: {
  //   patient: {
  //     service: new PassThroughService('Patient'),
  //     versions: [ VERSIONS['3_0_1'] ]
  //   }
  // }
  profiles: {
    Patient: {
      service: './src/services/patient.service',
      versions: [VERSIONS['4_0_0'], VERSIONS['3_0_1'], VERSIONS['1_0_2']],
    },

    // 'AdverseEvent': {
    //   service: './src/services/adverseevent.service.js',
    //   versions: [VERSIONS['4_0_0'], VERSIONS['3_0_1']
    // },
    AllergyIntolerance: {
      service: './src/services/allergyintolerance.service',
      versions: [VERSIONS['4_0_0']],
    },

    // 'CarePlan': {
    // 	service: './src/services/careplan.service.js',
    // 	versions: [VERSIONS['4_0_0'], VERSIONS['3_0_1'] ]
    // },
    Condition: {
      service: './src/services/condition.service',
      versions: [VERSIONS['4_0_0'], VERSIONS['3_0_1'], VERSIONS['1_0_2']],
    },

    Device: {
      service: './src/services/device.service',
      versions: [VERSIONS['4_0_0'], VERSIONS['3_0_1'], VERSIONS['1_0_2']],
    },

    Encounter: {
      service: './src/services/encounter.service',
      versions: [VERSIONS['4_0_0'], VERSIONS['3_0_1'], VERSIONS['1_0_2']],
    },

    // 'Goal': {
    //   service: './src/services/goal.service.js',
    //   versions: [VERSIONS['4_0_0'], VERSIONS['3_0_1'], VERSIONS['1_0_2']]
    // },

    Immunization: {
      service: './src/services/immunization.service',
      versions: [VERSIONS['4_0_0'], VERSIONS['3_0_1'], VERSIONS['1_0_2']],
    },

    MedicationAdministration: {
      service: './src/services/medicationadministration.service',
      versions: [VERSIONS['4_0_0'], VERSIONS['3_0_1'], VERSIONS['1_0_2']],
    },

    MedicationRequest: {
      service: './src/services/medicationrequest.service',
      versions: [VERSIONS['4_0_0'], VERSIONS['3_0_1']],
    },

    MedicationStatement: {
      service: './src/services/medicationstatement.service',
      versions: [VERSIONS['4_0_0'], VERSIONS['3_0_1'], VERSIONS['1_0_2']],
    },

    Observation: {
      service: './src/services/observation.service',
      versions: [VERSIONS['4_0_0'], VERSIONS['3_0_1'], VERSIONS['1_0_2']],
    },

    Practitioner: {
      service: './src/services/practitioner.service',
      versions: [VERSIONS['4_0_0'], VERSIONS['3_0_1'], VERSIONS['1_0_2']],
    },

    Procedure: {
      service: './src/services/procedure.service',
      versions: [VERSIONS['4_0_0'], VERSIONS['3_0_1'], VERSIONS['1_0_2']],
    },
  },
});

module.exports = {
  fhirServerConfig,
  fhirClientConfig,
};
