'use strict';

/**
 * @ngdoc overview
 * @name gccdApp
 * @description
 * # gccdApp
 *
 * Main module of the application.
 */
angular
  .module('gccdApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
        .when('/registration', {
          templateUrl: 'views/registration.html',
          controller : 'RegistrationCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
