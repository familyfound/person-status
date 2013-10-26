
var routes = {}
  , angular = require('angular')
  , ffapi = require('ffapi')

var app = angular.module('person-status', ['ffapi'])

app.directive('personStatus', ['ffapi', function (ffapi) {
  return {
    replace: true,
    restrict: 'A',
    scope: {
      person: '=personStatus'
    },
    templateUrl: 'person-status.html',
    link: function (scope, el, attrs) {
      scope.statuses = statuses.titles
      scope.set = function (status) {
        person.status = status
        ffapi.get('person/status', {status: value, id: $scope.personId});
      }
    }
  }
}]);
