const PassThroughService = require('../utils/passthrough.service.js');

class ObservationService extends PassThroughService {
    constructor(){
      super('Observation');
    }
}

module.exports = new ObservationService();
