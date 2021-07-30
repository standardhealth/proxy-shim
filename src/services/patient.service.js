const PassThroughService = require('../utils/passthrough.service');

class PatientService extends PassThroughService {
  constructor() {
    super('Patient');
  }
}

module.exports = new PatientService();
