/**
 * Created by Peter on 15.12.2015.
 */
'use strict';

angular.module('worldsApp')
  .controller('WorldsIndexController', function($scope, TypesService, WorldsService, typeDataService) {
    $scope.types = TypesService.query();
    $scope.worlds = [
      {
        "id" : 1,
        "name" : "Midkemia",
        "type" : "Fantasy",
        "popularity" : 7
      },
      {
        "id" : 2,
        "name" : "Wheel of Time",
        "type" : "Fantasy",
        "popularity" : 8
      },
      {
        "id" : 3,
        "name" : "Revelation Space",
        "type" : "Sci-fi",
        "popularity" : 3
      },
      {
        "id" : 4,
        "name" : "Dune",
        "type" : "Sci-fi",
        "popularity" : 9
      },
      {
        "id" : 5,
        "name" : "Fionavar",
        "type" : "Fantasy",
        "popularity" : 5
      }
    ];
    $scope.worlds2 = WorldsService.query();
    $scope.sort = false;
    $scope.checkList = function() {
      return typeDataService.checkList();
    };
    $scope.checkForm = function() {
      return typeDataService.checkForm();
    }
  });