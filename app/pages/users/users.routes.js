(function() {
    'use strict';
  
    angular
      .module('offMetaTFT')
      .config(userRoutes);
  
    userRoutes.$inject = ['$routeProvider'];
  
    function userRoutes($routeProvider) {
      $routeProvider
        .when('/user/:id', {
          templateUrl: 'app/pages/users/user-detail.html',
          controller: 'UserDetailCtrl',
          controllerAs: 'vm'
        })
        .when('/users/:id/edit', {
          templateUrl: 'app/pages/users/user-edit.html',
          controller: 'UserEditController',
          controllerAs: 'vm'
        })
    }
  })();
  