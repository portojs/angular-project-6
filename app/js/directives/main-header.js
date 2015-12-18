/**
 * Created by Peter on 15.12.2015.
 */

'use strict';

angular.module('worldsApp')
  .directive('mainHeader', function($location, typeDataService) {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/main-header.html',
      scope: {
        type: '='
      },
      link: function(scope, element, attrs) {
        scope.currentLink = $location.path() === '/contact' ? 5 : 1;
        scope.selectLink = function(link) {
          scope.currentLink = link;
        };
        scope.changeType = function(type) {
          typeDataService.changeType(type);
        };
        scope.selectedLink = function(link) {
          return scope.currentLink === link;
        };
      }
    };
  });