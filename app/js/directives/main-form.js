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
        scope.buttonText = "Form not yet completed";
        scope.submitForm = function() {
          scope.worlds.push(scope.world);
          scope.world = {};
        };
        scope.checkForm = function() {
          if (scope.addWorldForm.$valid) {
            scope.buttonText = "Add a new world";
          }
          else {
            scope.buttonText = "Form not yet completed";
          }
        };
        scope.buttonAnimation = function() {
          $('button').toggleClass('animated');
        }
      }
    };
  });