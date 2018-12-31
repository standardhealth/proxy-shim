const FHIRServer = require('@asymmetrik/node-fhir-server-core');
const Client = require('fhir-kit-client');
const {
  fhirClientConfig
} = require('../client.config');

const {
  bundleToResourceList
} = require('./response.utils');


module.exports = class PassThroughService {

  constructor(resourceType) {
    this.resourceType = resourceType;
    let getResource = (base_version) => {
      return require(FHIRServer.resolveFromVersion(base_version, resourceType));
    };
    this.getResource = getResource;
  }



  search(args, context, logger) {
    return new Promise((resolve, reject) => {
      logger.info(this.resourceType + ' >>> search');
      //prune the args
      const base_version = args.base_version;
      delete args.base_version;

      let fhirClient = new Client({
        baseUrl: fhirClientConfig.baseUrl
      });
      fhirClient.bearerToken = context.token;
      fhirClient.search({
          resourceType: this.resourceType,
          searchParams: args
        })
        .then((response) => {
          let Resource = this.getResource(base_version);
          let resourceList = bundleToResourceList(response);
          resourceList.forEach(function(element, i, returnArray) {
            returnArray[i] = new Resource(element);
          });
          resolve(resourceList);
        }).catch(reject);

    });
  }

  searchById(args, context, logger) {
    return new Promise((resolve, reject) => {
      logger.info(this.resourceType + ' >>> searchById');
      let {
        id
      } = args;
      let fhirClient = new Client({
        baseUrl: fhirClientConfig.baseUrl
      });
      fhirClient.bearerToken = context.token;
      fhirClient.read({
          resourceType: this.resourceType,
          id: id
        })
        .then((response) => {
          if (!response.meta) {
            response.meta = {};
          }
          resolve(response);
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
