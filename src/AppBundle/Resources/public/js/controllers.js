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

.controller('RestaurantNewCtrl', function($scope, $log, $http) {
    $scope.save = function() {
        var restaurant = {name: 'Nasi Goreng Solo'};
        $log.info('Posting', restaurant);
        $http.post('/restaurants/', restaurant)
            .success(function(data, status, headers, config) {
                $log.info('success', data);
            }).error(function(data, status, headers, config) {
                $log.error('error', data);
            });
    };
})

.controller('CategoriesCtrl', function($scope, $log) {
})

;
