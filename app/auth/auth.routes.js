(function () {
    'use strict';
  
    angular
      .module('offMetaTFT')
      .config(authRoutes);
  
    authRoutes.$inject = ['$routeProvider'];
  
    function authRoutes($routeProvider) {
      $routeProvider
        .when('/login', {
          templateUrl: 'app/auth/login.html',
          controller: 'LoginController',
          controllerAs: 'vm'
        })
        .when('/register', {
          templateUrl: 'app/auth/register.html',
          controller: 'RegisterController',
          controllerAs: 'vm'
        });
    }
  })();
  