const PassThroughService = require('../utils/passthrough.service.js');

class MedicationOrderService extends PassThroughService {
    constructor(){
      super('MedicationOrder');
    }
}

module.exports = new MedicationOrderService();
