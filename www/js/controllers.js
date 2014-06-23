angular.module('starter.controllers', ['starter.services'])

.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.controller('MainCtrl', ['$scope', 'Camera', 'Vibration', 'SpeechRecognizer',
 function($scope, Camera, Vibration, SpeechRecognizer) {

  $scope.vibrateTime = 2000;

  $scope.getPhoto = function() {
    Camera.getPicture({
      quality: 75,
      targetWidth: 320,
      targetHeight: 320,
      saveToPhotoAlbum: false
    }).then(function(imageURI) {
      console.log(imageURI);
      $scope.lastPhoto = imageURI;
    }, function(err) {
      console.err(err);
    });
  };

  $scope.vibratePhone = function() {
    Vibration.vibrate($scope.vibrateTime);
  };

  $scope.stopVibrate = function() {
    Vibration.cancelVibration();
  };

  $scope.recognize = function() {
    SpeechRecognizer.recognize(3, 'Cordova Speech Recognizer Plugin').then(function(results) {

      $scope.results = results;
    }, function(err) {
      $scope.results = err;
    });
  };

}]);


// .controller('DashCtrl', function($scope) {
// })

// .controller('FriendsCtrl', function($scope, Friends, Camera) {
//   $scope.friends = Friends.all();
//   $scope.getPhoto = function() {
//     console.log('Getting camera');
//     Camera.getPicture().then(function(imageURI) {
//       console.log(imageURI);
//       $scope.lastPhoto = imageURI;
//     }, function(err) {
//       console.err(err);
//     }, {
//       quality: 75,
//       targetWidth: 320,
//       targetHeight: 320,
//       saveToPhotoAlbum: false
//     });
//     /*
//     navigator.camera.getPicture(function(imageURI) {
//       console.log(imageURI);
//     }, function(err) {
//     }, {
//       quality: 50,
//       destinationType: Camera.DestinationType.DATA_URL
//     });
//     */
//   }
// });