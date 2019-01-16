const PassThroughService = require('../utils/passthrough.service.js');
const FHIRServer = require('@asymmetrik/node-fhir-server-core');
const mkFhir = require('fhir.js');
const config = require('config');
const {
  bundleToResourceList,
  isBundle
} = require('../utils/response.utils');


const fhirClientConfig = config.fhirClientConfig;

const getResourceType = (resourceType, version) =>{
  return require(FHIRServer.resolveFromVersion(version, resourceType));
};



class PatientService extends PassThroughService {
    constructor(){
      super('Patient');
      // this is done this way due to the way that node-fhir-server-core looks
      // for operations.  It looks in the properties list of the service object
      // which does not for some reason have the functions defined below.  Adding
      // it directly here as a property on the object allows it to be part of the
      // service object properties which allows the server to configure
      // the operation
      this.everything = this.everythingOperation;

    }

    everythingOperation(args, context, _logger){
      const base_version = args.base_version;
      delete args.base_version;
      // set up the options for the client , including the bearer token
      let options = {
        baseUrl: fhirClientConfig.baseUrl,
        auth: {
          bearer: context.token
        }
      };
      var fhirClient = mkFhir(options);
      let resourceTypeArgs = {patientId: args.id};
      let resourceTypes = fhirClientConfig.patientEverythingResources || [];
      return new Promise((resolve, _reject) => {
        // Read the Patient Resources
        let promises = [fhirClient.read({
                        type: 'Patient',
                        id: args.id
          })];
        // For each of the configured resource types call the search method for them with
        // the patient id as the parameter. Store all of the promisses in an arrary
        // to resovle in a single call
        for (let x in resourceTypes){
          let resoureType = resourceTypes[x];
          let query = fhirClient.search({
              type: resoureType,
              query: resourceTypeArgs
            });
          promises.push(query);
        }

        // resolve all of the proises
        Promise.all(promises).then((values) => {
          // set up a list to return
          let returnResources = [];
          for (let i in values){
            let value = values[i].data;
            let resources = isBundle(value) ? bundleToResourceList(value) : [value];
              for (var ri in resources){
                var instance = resources[ri];
                let Resource = getResourceType(instance.resourceType, base_version);
                returnResources.push(new Resource(instance));
              }
          }
          resolve(returnResources);
        });

      });
    }
}

module.exports = new PatientService();
