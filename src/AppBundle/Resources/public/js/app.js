"use strict";

angular.module('mkphp', ['ngRoute', 'mobile-angular-ui',
                         'mkphp.controllers', 'mkphp.services'])
.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'bundles/app/partials/home.html',
        controller: 'HomeCtrl'
    })
    .when('/restaurants', {
        templateUrl: 'bundles/app/partials/restaurant/index.html',
        controller: 'RestaurantIndexCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});
