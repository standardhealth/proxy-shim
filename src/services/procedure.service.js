const PassThroughService = require('../utils/passthrough.service.js');

class ProcedureService extends PassThroughService {
    constructor(){
      super('Procedure');
    }
}

module.exports = new ProcedureService();
