(function() {
    'use strict';
    angular
      .module('offMetaTFT')
      .config(configureRoutes);
  
    configureRoutes.$inject = ['$routeProvider', '$locationProvider'];
    function configureRoutes($routeProvider, $locationProvider) {
      $locationProvider.hashPrefix('');
      $routeProvider
        .when('/post', {
          templateUrl: 'app/posts/posts.html',
          controller: 'PostsCtrl',
          controllerAs: 'vm'
        })
        .when('/post/:id', {
          templateUrl: 'app/posts/post-detail.html',
          controller: 'PostDetailCtrl',
          controllerAs: 'vm'
        })
        .when('/user', {
          templateUrl: 'app/users/users.html',
          controller: 'UsersCtrl',
          controllerAs: 'vm'
        })
        .when('/user/:id', {
          templateUrl: 'app/users/user-detail.html',
          controller: 'UserDetailCtrl',
          controllerAs: 'vm'
        })
        .when('/login', {
          templateUrl: 'app/auth/login.html',
          controller: 'LoginController',
          controllerAs: 'vm'
        })
        .when('/register', {
          templateUrl: 'app/auth/register.html',
          controller: 'RegisterController',
          controllerAs: 'vm'
        })
        .otherwise({ redirectTo: '/post' });
    }
  })();
  