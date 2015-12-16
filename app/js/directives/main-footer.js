
'use strict';

angular.module('worldApp')
  .directive('mainFooter', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/main-footer.html'
    };
  });