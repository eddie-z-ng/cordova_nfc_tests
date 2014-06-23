'use strict';

angular.module('starter.services', [])

.factory('Camera', ['$q', function($q) {
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
}])

.factory('Vibration', function() {
  return {
    vibrateWithPattern: function(times) {
      navigator.notification.vibrateWithPattern(times);
    },
    vibrate: function(time) {
      navigator.notification.vibrate(time);
    },
    cancelVibration: function() {
      navigator.notification.cancelVibration();
    }
  };
})

.factory('SpeechRecognizer', ['$q', function($q) {
  return {
    recognize: function(maxResults, promptMessage) {
      var q = $q.defer();

      navigator.speechrecognizer.recognize(function(results) {
        q.resolve(results);
      }, function(error) {
        q.reject(error);
      }, maxResults, promptMessage);
    }
  };
}]);