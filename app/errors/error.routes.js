(function () {
    'use strict';
  
    angular
      .module('offMetaTFT')
      .config(errorRoutes);
  
    errorRoutes.$inject = ['$routeProvider'];
  
    function errorRoutes($routeProvider) {
      $routeProvider
        .when('/403', {
          templateUrl: 'app/errors/403.html',
          controller: 'ErrorController',
          controllerAs: 'vm'
        })
        .when('/404', {
          templateUrl: 'app/errors/404.html',
          controller: 'ErrorController',
          controllerAs: 'vm'
        });
    }
  })();
  