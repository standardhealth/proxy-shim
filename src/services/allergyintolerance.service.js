const PassThroughService = require('../utils/passthrough.service.js');

class AllergyIntoleranceService extends PassThroughService {
    constructor(){
      super('AllergyIntolerance');
    }
}

module.exports = new AllergyIntoleranceService();
