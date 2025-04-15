(function () {
    'use strict';
  
    angular
      .module('offMetaTFT')
      .config(authRoutes);
  
    authRoutes.$inject = ['$routeProvider'];
  
    function authRoutes($routeProvider) {
      $routeProvider
        .when('/login', {
          templateUrl: 'app/pages/auth/login.html',
          controller: 'LoginController',
          controllerAs: 'vm'
        })
        .when('/register', {
          templateUrl: 'app/pages/auth/register.html',
          controller: 'RegisterController',
          controllerAs: 'vm'
        });
    }
  })();
  