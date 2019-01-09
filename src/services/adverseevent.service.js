const PassThroughService = require('../utils/passthrough.service.js');

class AdverseEventService extends PassThroughService {
    constructor(){
      super('AdverseEvent');
    }
}

module.exports = new AdverseEventService();
