const {
  VERSIONS,
  RESOURCES
} = require('@asymmetrik/node-fhir-server-core').constants;

// // Set up whitelist
// let whitelist_env = env.WHITELIST && env.WHITELIST.split(',').map(host => host.trim()) || false;
//
// // If no whitelist is present, disable cors
// // If it's length is 1, set it to a string, so * works
// // If there are multiple, keep them as an array
// let whitelist = whitelist_env && whitelist_env.length === 1
// 	? whitelist_env[0]
// 	: whitelist_env;

//
// let supportedResources = [RESOURCES.ACCOUNT,
//                           RESOURCES.PATIENT,
//                           RESOURCES.OBSERVATION,
//                           RESOURCES.MEDICATIONSTATEMENT,
//                           RESOURCES.ADVERSEEVENT,
//                           RESOURCES.ALLERGYINTOLERANCE,
//                           RESOURCES.IMMUNIZATION,
//                           RESOURCES.MEDICATIONADMINISTRATION,
//                           RESOURCES.CONDITION,
//                           RESOURCES.DEVICE,
//                           RESOURCES.PROCEDURE,
//                           RESOURCES.PRACTITIONER,
//                           RESOURCES.ENCOUNTER,
//                           RESOURCES.MEDICATIONREQUEST];
// let profiles = {};
// for (var i in supportedResources){
//   let profile = supportedResources[i];
//   profiles[profile] = { service: new PassThroughService(profile),
//                         versions: [ VERSIONS['3_0_1'] ]};
// }


let fhirClientConfig = {
  baseUrl: 'https://fhir-ehr.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca',
  debug: true
  //baseUrl: 'http://moonshot-dev.mitre.org:4001/v/r2/'

};

/**c
 * @name fhirServerConfig
 * @summary @asymmetrik/node-fhir-server-core configurations.
 */
let fhirServerConfig = {
  auth: {
    // This servers URI
    resourceServer: 'http://localhost:3001',
    //
    // if you use this strategy, you need to add the corresponding env vars to docker-compose
    //
    strategy: {
      name: 'bearer',
      useSession: false,
      service: './src/strategies/bearer.strategy.js'
    },
  },
  server: {
    // support various ENV that uses PORT vs SERVER_PORT
    port: 3001,
    // allow Access-Control-Allow-Origin
    corsOptions: {
      maxAge: 86400,
      origin: ['*', 'http://mm221745-pc.mitre.org:3000']
    }
  },
  logging: {
    level: 'debug'
  },
  //
  // If you want to set up conformance statement with security enabled
  // Uncomment the following block
  //
  security: [{
      url: 'authorize',
      valueUri: 'http://localhost:3001/auth/authorize'
    },
    {
      url: 'token',
      valueUri: 'http://localhost:3001/auth/token'
    }
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

    [RESOURCES.PATIENT]: {
      service: './src/services/patient.service.js',
      versions: [VERSIONS['3_0_1'], VERSIONS['1_0_2']]
    },

    // [RESOURCES.ADVERSEEVENT]: {
    //   service: './src/services/adverseevent.service.js',
    //   versions: [VERSIONS['3_0_1']
    // },
    [RESOURCES.ALLERGYINTOLERANCE]: {
      service: './src/services/allergyintolerance.service.js',
      versions: [VERSIONS['3_0_1'], VERSIONS['1_0_2']]
    },

    // [RESOURCES.CAREPLAN]: {
    // 	service: './src/services/careplan.service.js',
    // 	versions: [ VERSIONS['3_0_1'] ]
    // },
    [RESOURCES.CONDITION]: {
      service: './src/services/condition.service.js',
      versions: [VERSIONS['3_0_1'], VERSIONS['1_0_2']]
    },

    [RESOURCES.DEVICE]: {
      service: './src/services/device.service.js',
      versions: [VERSIONS['3_0_1'], VERSIONS['1_0_2']]
    },

    [RESOURCES.ENCOUNTER]: {
      service: './src/services/encounter.service.js',
      versions: [VERSIONS['3_0_1'], VERSIONS['1_0_2']]
    },

    // [RESOURCES.GOAL]: {
    //   service: './src/services/goal.service.js',
    //   versions: [VERSIONS['3_0_1'], VERSIONS['1_0_2']]
    // },

    [RESOURCES.IMMUNIZATION]: {
      service: './src/services/immunization.service.js',
      versions: [VERSIONS['3_0_1'], VERSIONS['1_0_2']]
    },

    [RESOURCES.MEDICATIONADMINISTRATION]: {
      service: './src/services/medicationadministration.service.js',
      versions: [VERSIONS['3_0_1'], VERSIONS['1_0_2']]
    },

    [RESOURCES.MEDICATIONREQUEST]: {
      service: './src/services/medicationrequest.service.js',
      versions: [VERSIONS['3_0_1']]
    },
    // ['MedicationOrder']: {
    //   service: './src/services/medicationrequest.service.js',
    //   versions: [VERSIONS['1_0_2']]
    // },
    [RESOURCES.MEDICATIONSTATEMENT]: {
      service: './src/services/medicationstatement.service.js',
      versions: [VERSIONS['3_0_1'], VERSIONS['1_0_2']]
    },

    [RESOURCES.OBSERVATION]: {
      service: './src/services/observation.service.js',
      versions: [VERSIONS['3_0_1'], VERSIONS['1_0_2']]
    },

    [RESOURCES.PRACTITIONER]: {
      service: './src/services/practitioner.service.js',
      versions: [VERSIONS['3_0_1'], VERSIONS['1_0_2']]
    },

    [RESOURCES.PROCEDURE]: {
      service: './src/services/procedure.service.js',
      versions: [VERSIONS['3_0_1'], VERSIONS['1_0_2']]
    },

  }
};

module.exports = {
  fhirServerConfig,
  fhirClientConfig
};
