/**
 * Created by Peter on 15.12.2015.
 */
'use strict';

angular.module('worldsApp')
  .provider('GravatarProvider', function() {
    var avatarSize = 80;
    var avatarUrl = 'http://www.gravatar.com/avatar/';
    this.$get = function() {
      return function(email) {
        return avatarUrl + CryptoJS.MD5(email) + "?size:=" + avatarSize.toString();
      }
    };
  });