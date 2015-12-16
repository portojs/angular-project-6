/**
 * Created by Peter on 15.12.2015.
 */
'use strict';

angular.module('worldsApp')
  .controller('WorldsIndexController', function($scope, TypesService, WorldsService) {
    $scope.types = TypesService.query();
    $scope.worlds = WorldsService.query();
  });