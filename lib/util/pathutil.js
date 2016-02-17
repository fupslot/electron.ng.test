var path = require('path');
var fs = require('fs');
var util = require('util');

// Export
module.exports.root = function(target) {
  return path.resolve(__dirname, '../..', target)
};

// Export
module.exports.src = function(target) {
  return path.resolve(__dirname, '../../app/src', target)
};

// Export
module.exports.module = function(target) {
  return path.resolve(__dirname, '../../node_modules', target)
};
