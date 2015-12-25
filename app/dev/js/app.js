'use strict';

/* App Module */

var musicplayerApp = angular.module('musicplayerApp', [
    'ngRoute',
    'musicplayerControllers',
    'musicplayerFilters',
    'musicplayerServices'
]);

musicplayerApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/musiclist', {
            templateUrl: 'temp/music-list.html',
            controller: 'MusicPlayerCtrl'
        }).
        when('/phones/:phoneId', {
            templateUrl: 'temp/music-detail.html',
            controller: 'PhoneDetailCtrl'
        }).
        otherwise({
            redirectTo: '/musiclist'
        });
    }
]);
