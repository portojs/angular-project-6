/**
 * Created by Peter on 15.12.2015.
 */

'use strict';

angular.module('worldsApp')
  .directive('mainForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/main-form.html',
      scope: {
        types: '=',
        worlds: '='
      },
      link: function(scope, element, attrs) {
        scope.world = {};
        scope.submitForm = function() {
          scope.worlds.push(scope.world);
          scope.world = {};
        }
      }
    };
  });