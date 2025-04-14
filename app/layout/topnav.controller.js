// app/layout/topnav.controller.js
(function () {
  'use strict';

  angular
    .module('offMetaTFT')
    .controller('TopNavController', TopNavController);

  TopNavController.$inject = ['$location', '$window'];

  function TopNavController($location, $window) {
    const vm = this;

    vm.logout = function () {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      $location.path('/login');
    };
  }
})();
