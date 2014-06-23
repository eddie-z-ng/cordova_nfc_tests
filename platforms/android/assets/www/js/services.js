'use strict';

angular.module('starter.services', [])

.factory('Camera', ['$q', function($q) {
  console.log('got here');
  return {
    getPicture: function(options) {
      var q = $q.defer();

      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return q.promise;
    }
  };
}]);