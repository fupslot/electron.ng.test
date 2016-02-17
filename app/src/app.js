var angular = require('angular');
var pathutil = require('../../lib/util/pathutil');

// Module: app.core
require(pathutil.root('core/app'));

// Module: main
var app = angular.module('app', ['app.core']);
app.controller('appCtrl', require(pathutil.src('./app_ctrl')));
