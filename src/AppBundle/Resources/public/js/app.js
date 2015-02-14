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
    .when('/restaurants/new', {
        templateUrl: 'bundles/app/partials/restaurant/new.html',
        controller: 'RestaurantNewCtrl'
    })

    .when('/places', {
        templateUrl: 'bundles/app/partials/place/index.html',
        controller: 'PlaceIndexCtrl'
    })
    .when('/places/new', {
        templateUrl: 'bundles/app/partials/place/new.html',
        controller: 'PlaceNewCtrl'
    })

    .when('/events', {
        templateUrl: 'bundles/app/partials/event/index.html',
        controller: 'EventIndexCtrl'
    })
    .when('/events/new', {
        templateUrl: 'bundles/app/partials/event/new.html',
        controller: 'EventNewCtrl'
    })

    .when('/recipes', {
        templateUrl: 'bundles/app/partials/recipe/index.html',
        controller: 'RecipeIndexCtrl'
    })
    .when('/recipes/new', {
        templateUrl: 'bundles/app/partials/recipe/new.html',
        controller: 'RecipeNewCtrl'
    })

    .otherwise({
        redirectTo: '/'
    });
});
