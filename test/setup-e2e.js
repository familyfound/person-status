
var angular = require('angularjs');

// Angular modules (register themselves)
require('person-status');

angular.module('test', ['person-status'])
  .factory('ffapi', function () {
    return {
      get: function () {
        console.log([].slice.call(arguments))
      }
    }
  })
  .controller('Tester', function ($scope) {
    // setup scope
    $scope.person = {
      id: 'one2',
      status: 'inactive'
    }
  });

