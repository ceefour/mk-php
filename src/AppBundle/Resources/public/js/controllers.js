"use strict";

angular.module('mkphp.controllers', [])

.controller('HomeCtrl', function($scope, $log) {
})

.controller('RestaurantIndexCtrl', function($scope, $log, $http) {
    $scope.restaurants = [];
    $http.get('/restaurants/')
        .success(function(data, status, headers, config) {
            $log.info('success', data);
            $scope.restaurants = data;
        }).error(function(data, status, headers, config) {
            $log.error('error', data);
        });
})
.controller('RestaurantNewCtrl', function($scope, $log, $http, $window, $location) {
    $scope.restaurant = {
        name: 'Nasi Goreng Solo',
        address: 'Taman Sari',
        description: 'Porsinya buanyakk kenyang'
    };
    $scope.save = function() {
        var restaurant = $scope.restaurant;
        $log.info('Posting', restaurant);
        $http.post('/restaurants/', restaurant)
            .success(function(data, status, headers, config) {
                $log.info('success', data);
                $window.alert(data.message);
                $location.path('/restaurants');
            }).error(function(data, status, headers, config) {
                $log.error('error', data);
            });
    };
})

.controller('PlaceIndexCtrl', function($scope, $log, $http) {
    $scope.places = [];
    $http.get('/places/')
        .success(function(data, status, headers, config) {
            $log.info('success', data);
            $scope.places = data;
        }).error(function(data, status, headers, config) {
            $log.error('error', data);
        });
})
.controller('PlaceNewCtrl', function($scope, $log, $http, $window, $location) {
    $scope.place = {
        name: 'Gunung Bromo',
        address: 'Jawa Timur',
        description: 'Gunung yang sangat indah dan misterius'
    };
    $scope.save = function() {
        var place = $scope.place;
        $log.info('Posting', place);
        $http.post('/places/', place)
            .success(function(data, status, headers, config) {
                $log.info('success', data);
                $window.alert(data.message);
                $location.path('/places');
            }).error(function(data, status, headers, config) {
                $log.error('error', data);
            });
    };
})

.controller('EventIndexCtrl', function($scope, $log, $http) {
    $scope.events = [];
    $http.get('/events/')
        .success(function(data, status, headers, config) {
            $log.info('success', data);
            $scope.events = data;
        }).error(function(data, status, headers, config) {
            $log.error('error', data);
        });
})
.controller('EventNewCtrl', function($scope, $log, $http, $window, $location) {
    $scope.event = {
        name: 'Dago Culinary Night',
        address: 'Jl. Ir. H. Juanda',
        description: 'Semua jajanan dan minuman tersedia di acara ini'
    };
    $scope.save = function() {
        var event = $scope.event;
        $log.info('Posting', event);
        $http.post('/events/', event)
            .success(function(data, status, headers, config) {
                $log.info('success', data);
                $window.alert(data.message);
                $location.path('/events');
            }).error(function(data, status, headers, config) {
                $log.error('error', data);
            });
    };
})

.controller('RecipeIndexCtrl', function($scope, $log, $http) {
    $scope.recipes = [];
    $http.get('/recipes/')
        .success(function(data, status, headers, config) {
            $log.info('success', data);
            $scope.recipes = data;
        }).error(function(data, status, headers, config) {
            $log.error('error', data);
        });
})
.controller('RecipeNewCtrl', function($scope, $log, $http, $window, $location) {
    $scope.recipe = {
        name: 'Mie Kocok Baso Kikil',
        category: 'Mie',
        description: 'Mie kocok khas Sunda dengan daging menggoda'
    };
    $scope.save = function() {
        var recipe = $scope.recipe;
        $log.info('Posting', recipe);
        $http.post('/recipes/', recipe)
            .success(function(data, status, headers, config) {
                $log.info('success', data);
                $window.alert(data.message);
                $location.path('/recipes');
            }).error(function(data, status, headers, config) {
                $log.error('error', data);
            });
    };
})

;
