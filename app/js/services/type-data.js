/**
 * Created by Peter on 17.12.2015.
 */
'use strict';

angular.module('worldsApp')
  .service('typeDataService', function() {
    return {
      currentType: "",
      changeType: function(type) {
        return type;
      }
    }
  });