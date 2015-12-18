/**
 * Created by Peter on 15.12.2015.
 */

'use strict';

angular.module('worldsApp')
  .directive('mainList', function(typeDataService) {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/main-list.html',
      scope: {
        list: '=',
        search: '=',
        sort: '='
      },
      link: function(scope, element, attrs) {
        scope.newType = function() {
          return typeDataService.getType();
        };
      }
    };
  });