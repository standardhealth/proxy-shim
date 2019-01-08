const PassThroughService = require('../utils/passthrough.service.js');

class PractitionerService extends PassThroughService {
    constructor(){
      super('Practitioner');
    }
}

module.exports = new PractitionerService();
