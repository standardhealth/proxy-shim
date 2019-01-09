const PassThroughService = require('../utils/passthrough.service.js');

class MedicationRequestService extends PassThroughService {
    constructor(){
      super('MedicationRequest');
    }
}

module.exports = new MedicationRequestService();
