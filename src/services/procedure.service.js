const PassThroughService = require('../utils/passthrough.service');

class ProcedureService extends PassThroughService {
  constructor() {
    super('Procedure');
  }
}

module.exports = new ProcedureService();
