// app/layout/topnav.controller.js
(function () {
  'use strict';

  angular
    .module('offMetaTFT')
    .controller('TopNavController', TopNavController);

  TopNavController.$inject = ['$location', '$window', 'AuthService'];

  function TopNavController($location, $window, AuthService) {
    const vm = this;;
    
    vm.userId = AuthService.getUserIdFromToken();
    vm.username = AuthService.getUsernamelFromToken();

    vm.logout = function () {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      $location.path('/login');
    };
  }
})();
