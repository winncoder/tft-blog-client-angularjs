(function() {
    'use strict';
    angular
    .module('offMetaTFT', ['ngRoute'])
    .run(['$rootScope', '$location', function ($rootScope, $location) {
      $rootScope.$on('$routeChangeStart', function (event, next, current) {
        const publicRoutes = ['/login', '/register'];
        const loggedIn = !!localStorage.getItem('token');

        if (!loggedIn && publicRoutes.indexOf($location.path()) === -1) {
          $location.path('/login');
        }
      });
    }]);
    
  })();
  