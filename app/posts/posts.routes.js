(function() {
    'use strict';
  
    angular
      .module('offMetaTFT')
      .config(userRoutes);
  
    userRoutes.$inject = ['$routeProvider'];
  
    function userRoutes($routeProvider) {
      $routeProvider
        .when('/post/', {
          templateUrl: 'app/posts/posts.html',
        });
    }
  })();
  