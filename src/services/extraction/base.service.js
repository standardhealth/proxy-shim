const { loggers } = require('@asymmetrik/node-fhir-server-core');
const { MCODEClient, mcodeApp } = require('mcode-extraction-framework');
const { createSearchsetBundle } = require('../../utils/extraction');

const logger = loggers.get('default');

/**
 * Base class for running extraction as a service
 * Implementation details of FHIR operations are to be implemented by subclasses
 */
class BaseExtractionService {
  constructor(resourceType, config) {
    this.resourceType = resourceType;
    this.config = config;
  }

  async search() {
    logger.info(`${this.resourceType} >>> search`);

    const extractedData = await mcodeApp(MCODEClient, null, null, this.config, null, false, true);
    const searchSetBundle = createSearchsetBundle(extractedData.map((b) => b.entry).flat(), this.resourceType);
    return searchSetBundle;
  }
}

module.exports = BaseExtractionService;
