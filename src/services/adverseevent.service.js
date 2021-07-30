const PassThroughService = require('../utils/passthrough.service');

class AdverseEventService extends PassThroughService {
  constructor() {
    super('AdverseEvent');
  }
}

module.exports = new AdverseEventService();
