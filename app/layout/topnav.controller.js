// app/layout/topnav.controller.js
(function () {
  'use strict';

  angular
    .module('offMetaTFT')
    .controller('TopNavController', TopNavController);

  TopNavController.$inject = ['$location', '$window', 'AuthService'];

  function TopNavController($location, $window, AuthService) {
    const vm = this;

    vm.username = ''; // You can set a default username or get from AuthService
    vm.userId = AuthService.getUserIdFromToken(); // Get user id from token

    // Optionally, get the username from the token as well
    vm.username = AuthService.getUsernamelFromToken();

    vm.logout = function () {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      $location.path('/login');
    };
  }
})();
