
'use strict';

angular.module('worldsApp')
  .directive('mainFooter', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/main-footer.html'
    };
  });