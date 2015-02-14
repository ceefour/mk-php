"use strict";

angular.module('mkphp', ['ngRoute', 'mobile-angular-ui',
                         'mkphp.controllers', 'mkphp.services'])
.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'bundles/app/partials/home.html',
        controller: 'HomeCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});
