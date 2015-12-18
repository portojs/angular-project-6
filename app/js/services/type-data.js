/**
 * Created by Peter on 17.12.2015.
 */
'use strict';

angular.module('worldsApp')
  .service('typeDataService', function() {

    var currentType = '';
    var showList = true;
    var showForm = false;

    return {
      changeType: function(type) {
        currentType = type;
      },
      getType: function() {
        return currentType;
      },
      showList: function() {
        showList = true;
      },
      hideList: function() {
        showList = false;
      },
      showForm: function() {
        showForm = true;
      },
      hideForm: function() {
        showForm = false;
      },
      checkList: function() {
        return showList;
      },
      checkForm: function() {
        return showForm;
      }
    };
  });