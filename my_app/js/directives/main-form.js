/**
 * Created by Peter on 15.12.2015.
 */

'use strict';

angular.module('worldApp')
  .directive('mainForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directive/main-form.html'
    };
  });