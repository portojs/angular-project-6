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
        scope.currentLink = $location.path('/contact') ? 5 : 1;
        scope.selectLink = function(link) {
          scope.currentLink = link;
        };
        scope.checkLink = function(link) {
          if (link === 2) {
            typeDataService.currentType = "Fantasy";
          } else if (link === 3) {
            typeDataService.currentType = "Sci-fi";
          }
        };
        scope.selectedLink = function(link) {
          scope.checkLink(link);
          return scope.currentLink === link;
        };
      }
    };
  });