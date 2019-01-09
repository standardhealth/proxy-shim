const PassThroughService = require('../utils/passthrough.service.js');

class AccountService extends PassThroughService {
    constructor(){
      super('Account');
    }
}

module.exports = new AccountService();
