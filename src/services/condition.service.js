const PassThroughService = require('../utils/passthrough.service.js');

class ConditionService extends PassThroughService {
    constructor(){
      super('Condition');
    }
}


module.exports = new ConditionService();
