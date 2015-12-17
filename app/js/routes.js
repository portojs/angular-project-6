/**
 * Created by Peter on 15.12.2015.
 */
'use strict';

angular.module('worldsApp')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/worlds', {
        templateUrl: 'templates/pages/worlds/index.html',
        controller: 'WorldsIndexController'
      })
      .when('/contact', {
        templateUrl: 'templates/pages/contact/index.html'
      })
      .when('/', {
        templateUrl: 'templates/pages/worlds/index.html',
        controller: 'WorldsIndexController'
      })
      .otherwise({redirectTo: '/'});
  }]);