module.exports = function(app) {
  var pathutil = require('../lib/util/pathutil');
  app.service('appVer', function() {
    return require(pathutil.root('package.json'));
  });
};
