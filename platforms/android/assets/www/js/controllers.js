angular.module('starter.controllers', ['starter.services'])

.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.controller('MainCtrl', ['$scope', 'Camera', function($scope, Camera) {

  $scope.getPhoto = function() {
    Camera.getPicture().then(function(imageURI) {
      console.log(imageURI);
      $scope.lastPhoto = imageURI;
    }, function(err) {
      console.err(err);
    }, {
      quality: 75,
      targetWidth: 320,
      targetHeight: 320,
      saveToPhotoAlbum: false
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