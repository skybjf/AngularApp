'use strict';

/* Services */

var musicplayerServices = angular.module('musicplayerServices', ['ngResource']);

musicplayerServices.factory('Music', ['$resource',
    function($resource) {
        return $resource('json/music.json', {}, {
            query: {
                method: 'GET',
                params: {
                    phoneId: 'phones'
                },
                isArray: true
            }
        });
    }
]);
