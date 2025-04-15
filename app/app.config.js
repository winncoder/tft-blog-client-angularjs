(function() {
    'use strict';
    angular
      .module('offMetaTFT')
      .config(configureRoutes);
  
    configureRoutes.$inject = ['$routeProvider', '$locationProvider'];
    function configureRoutes($routeProvider, $locationProvider) {
      $locationProvider.hashPrefix('');
      $routeProvider
        .when('/403', {
          templateUrl: 'app/errors/403.html',
          controller: 'ErrorController',
          controllerAs: 'vm'
        })
        .when('/post', {
          templateUrl: 'app/pages/posts/posts.html',
          controller: 'PostsCtrl',
          controllerAs: 'vm'
        })
        .when('/post/:id', {
          templateUrl: 'app/pages/posts/post-detail.html',
          controller: 'PostDetailCtrl',
          controllerAs: 'vm'
        })
        .when('/user', {
          templateUrl: 'app/pages/users/users.html',
          controller: 'UsersCtrl',
          controllerAs: 'vm'
        })
        .when('/user/:id', {
          templateUrl: 'app/pages/users/user-detail.html',
          controller: 'UserDetailCtrl',
          controllerAs: 'vm'
        })
        .when('/login', {
          templateUrl: 'app/pages/auth/login.html',
          controller: 'LoginController',
          controllerAs: 'vm'
        })
        .when('/register', {
          templateUrl: 'app/pages/auth/register.html',
          controller: 'RegisterController',
          controllerAs: 'vm'
        })
        .when('/user/:id/edit', {
          templateUrl: 'app/pages/users/user-edit.html',
          controller: 'UserEditController',
          controllerAs: 'vm'
        })
        .otherwise({ redirectTo: '/post' });
    }
  })();
  