const PassThroughService = require('../utils/passthrough.service.js');

class EncounterService extends PassThroughService {
    constructor(){
      super('Encounter');
    }
}

module.exports = new EncounterService();
