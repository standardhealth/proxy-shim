const PassThroughService = require('../utils/passthrough.service');

class ConditionService extends PassThroughService {
  constructor() {
    super('Condition');
  }
}

module.exports = new ConditionService();
