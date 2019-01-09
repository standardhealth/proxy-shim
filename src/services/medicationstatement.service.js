const PassThroughService = require('../utils/passthrough.service.js');

class MedicationStatementService extends PassThroughService {
    constructor(){
      super('MedicationStatement');
    }
}

module.exports = new MedicationStatementService();
