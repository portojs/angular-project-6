/**
 * Created by Peter on 15.12.2015.
 */
'use strict';

angular.module('worldsApp')
  .service('WorldsService', function($resource) {
    return $resource('json/worlds.json', {}, {});
  });