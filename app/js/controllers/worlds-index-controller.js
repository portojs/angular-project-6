/**
 * Created by Peter on 15.12.2015.
 */
'use strict';

angular.module('worldsApp')
  .controller('WorldsIndexController', function($scope, TypesService, WorldsService, typeDataService) {
    $scope.types = TypesService.query();
    $scope.worlds = WorldsService.query();
    $scope.sort = false;
    $scope.checkList = function() {
      return typeDataService.checkList();
    };
    $scope.checkForm = function() {
      return typeDataService.checkForm();
    }
  });