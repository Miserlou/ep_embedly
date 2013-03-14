// On the server
settings = require('../../src/node/utils/Settings');
exports.clientVars = function(hook, context, callback)
{
  // return the setting to the clientVars, sending the value
  return callback({ "EMBEDLY_API_KEY": settings.ep_embedly.EMBEDLY_API_KEY});
};
