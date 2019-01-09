const PassThroughService = require('../utils/passthrough.service.js');

class PatientService extends PassThroughService {
    constructor(){
      super('Patient');
    }
}

module.exports = new PatientService();
