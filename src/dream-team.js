const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  throw new CustomError('Not implemented');
  let nameMembers = members.filter(e=> { typeof(e) == 'String'} );

  
};
