'use strict';

/* Controllers */

var musicplayerControllers = angular.module('musicplayerControllers', []);

musicplayerControllers.controller('MusicPlayerCtrl', ['$scope', 'Music',
    function($scope, Music) {
        $scope.musics = Music.query();
        $scope.orderProp = 'id';
    }
]);

// musicplayerControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
//     function($scope, $routeParams, Phone) {
//         $scope.phone = Phone.get({
//             phoneId: $routeParams.phoneId
//         }, function(phone) {
//             $scope.mainImageUrl = phone.images[0];
//         });

//         $scope.setImage = function(imageUrl) {
//             $scope.mainImageUrl = imageUrl;
//         };
//     }
// ]);
