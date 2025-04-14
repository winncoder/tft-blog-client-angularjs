(function() {
    'use strict';
  
    angular
      .module('offMetaTFT')
      .config(userRoutes);
  
    userRoutes.$inject = ['$routeProvider'];
  
    function userRoutes($routeProvider) {
      $routeProvider
        .when('/user/:id', {
          templateUrl: 'app/users/user-detail.html',
          controller: 'UserDetailCtrl',
          controllerAs: 'vm'
        });
    }
  })();
  