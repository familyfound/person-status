
var routes = {}
  , angular = require('angularjs')
  , ffapi = require('ffapi')
  , statuses = require('statuses')

var app = module.exports = angular.module('person-status', ['ffapi'])

app.directive('personStatus', ['ffapi', function (ffapi) {
  return {
    replace: true,
    restrict: 'A',
    scope: {
      person: '=personStatus'
    },
    template: require('./template'),
    link: function (scope, el, attrs) {
      scope.statuses = statuses.titles
      scope.open = false
      scope.set = function (status) {
        scope.person.status = status
        scope.open = false
        ffapi.get('person/status', {status: status, id: scope.person.id});
      }
    }
  }
}]);
