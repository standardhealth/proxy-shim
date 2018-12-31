const FHIRServer = require('@asymmetrik/node-fhir-server-core');
var mkFhir = require('fhir.js');

const {
  fhirClientConfig
} = require('../client.config');

const {
  bundleToResourceList
} = require('./response.utils');


module.exports = class PassThroughService {

  constructor(resourceType, mappingService) {
    this.mappingService = mappingService;
    this.resourceType = resourceType;
    let getResource = (base_version) => {
      return require(FHIRServer.resolveFromVersion(base_version, resourceType));
    };
    this.getResource = getResource;
  }


  mapResource(resource){
    if (this.mappingService && this.mappingService.execute){
      return this.mappingService.execute(resource);
    }
    return resource;
  }
  search(args, context, logger) {
    return new Promise((resolve, reject) => {
      logger.info(this.resourceType + ' >>> search');
      let options = {
        baseUrl: fhirClientConfig.baseUrl,
        auth: {
          bearer: context.token
        }
      };
      var fhirClient = mkFhir(options);
      fhirClient.search({
          type: this.resourceType,
          query: args
        })
        .then((response) => {
          let Resource = this.getResource(base_version);
          let resourceList = bundleToResourceList(response);
          resourceList.forEach(function(element, i, returnArray) {
            returnArray[i] = new Resource(element);
          });
          resolve(this.mapResource(resourceList));
        }).catch(reject);

    });
  }

  searchById(args, context, logger) {
    return new Promise((resolve, reject) => {
      logger.info(this.resourceType + ' >>> searchById');
      let {
        id
      } = args;
      let options = {
        baseUrl: fhirClientConfig.baseUrl,
        auth: {
          bearer: context.token
        }
      };
      var fhirClient = mkFhir(options);
      fhirClient.read({
          type: this.resourceType,
          id: id
        })
        .then((response) => {
          let data = response.data;
          if (!data.meta) {
            data.meta = {};
          }
          resolve(this.mapResource(response));
        }).catch(reject);

    });
  }


  searchByVersionId(args, context, logger) {
    return new Promise((resolve, _reject) => {
      logger.info(this.resourceType + ' >>> searchByVersionId');
      resolve();
    });
  }

  create(args, context, logger) {
    return new Promise((resolve, _reject) => {
      logger.info(this.resourceType + ' >>> create');
      resolve();
    });
  }

  update(args, context, logger) {
    return new Promise((resolve, _reject) => {
      logger.info(this.resourceType + ' >>> update');
      resolve();
    });
  }

  remove(args, context, logger) {
    return new Promise((resolve, _reject) => {
      logger.info(this.resourceType + ' >>> delete');
      resolve();
    });
  }

  history(args, context, logger) {
    return new Promise((resolve, _reject) => {
      logger.info(this.resourceType + ' >>> history');
      resolve();
    });
  }

  historyById(args, context, logger) {
    return new Promise((resolve, _reject) => {
      logger.info(this.resourceType + ' >>> historyById');
      resolve();
    });
  }
};
