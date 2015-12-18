/**
 * Created by Peter on 17.12.2015.
 */
'use strict';

angular.module('worldsApp')
  .service('typeDataService', function() {

    var currentType = "";

    return {
      changeType: function(type) {
        console.log('changing to ' + type);
        currentType = type;
        console.log('new type is ' + currentType);
      },
      getType: function() {
        return currentType;
      }
    };
  });