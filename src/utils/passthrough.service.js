const { resolveFromVersion, loggers } = require('@asymmetrik/node-fhir-server-core');
const mkFhir = require('fhir.js');
const config = require('config');
const { bundleToResourceList } = require('./response.utils');

const logger = loggers.get('default');
const fhirClientConfig = config.fhirClientConfig;

module.exports = class PassThroughService {

  constructor(resourceType, mappingService) {
    this.mappingService = mappingService;
    this.resourceType = resourceType;
    let getResource = (base_version) => {
      return require(resolveFromVersion(base_version, resourceType));
    };
    this.getResource = getResource;
  }

  /* If the instance of this class has a mappingService configured this method
     will call the mapping service to map the passed in resource to return to the
     calling client
  */
  mapResource(resource){
    if (this.mappingService && this.mappingService.execute){
      return this.mappingService.execute(resource);
    }
    return resource;
  }

  /* Implements the generic search operation for the configured resourceType
  */
  search(args, context) {
    return new Promise((resolve, reject) => {
      logger.info(this.resourceType + ' >>> search');
      const base_version = args.base_version;
      delete args.base_version;
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
          let resourceList = bundleToResourceList(response.data);
          resourceList.forEach(function(element, i, returnArray) {
            returnArray[i] = new Resource(element);
          });
          resolve(this.mapResource(resourceList));
        }).catch(reject);

    });
  }
  /* Implements the  search by id operation for the configured resourceType
  */
  searchById(args, context) {
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
          resolve(this.mapResource(data));
        }).catch(reject);

    });
  }

 // Methods below are not currently implemented
  searchByVersionId(args, context) {
    return new Promise((resolve, _reject) => {
      logger.info(this.resourceType + ' >>> searchByVersionId');
      resolve();
    });
  }

  create(args, context) {
    return new Promise((resolve, _reject) => {
      logger.info(this.resourceType + ' >>> create');
      resolve();
    });
  }

  update(args, context) {
    return new Promise((resolve, _reject) => {
      logger.info(this.resourceType + ' >>> update');
      resolve();
    });
  }

  remove(args, context) {
    return new Promise((resolve, _reject) => {
      logger.info(this.resourceType + ' >>> delete');
      resolve();
    });
  }

  history(args, context) {
    return new Promise((resolve, _reject) => {
      logger.info(this.resourceType + ' >>> history');
      resolve();
    });
  }

  historyById(args, context) {
    return new Promise((resolve, _reject) => {
      logger.info(this.resourceType + ' >>> historyById');
      resolve();
    });
  }
};
