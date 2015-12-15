
'use strict';

angular.module('worldApp')
  .directive('mainFooter', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directive/main-footer.html'
    };
  });