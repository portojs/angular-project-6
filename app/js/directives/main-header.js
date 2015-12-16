/**
 * Created by Peter on 15.12.2015.
 */

'use strict';

angular.module('worldApp')
  .directive('mainHeader', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/main-header.html'
    };
  });