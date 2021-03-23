const PassThroughService = require('../utils/passthrough.service.js');

class MetadataService extends PassThroughService {
  constructor() {
    super('Metadata');
  }
}

module.exports = new MetadataService();
