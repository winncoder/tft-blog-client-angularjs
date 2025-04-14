// app/layout/shell.controller.js
(function () {
    'use strict';
  
    angular
      .module('offMetaTFT')
      .controller('ShellController', ShellController);

    ShellController.$inject = ['$location'];
  
    function ShellController() {
      var vm = this;
      vm.appTitle = 'Off-Meta TFT Blog';

      vm.isAuthPage = function () {
        const path = $location.path();
        return path === '/login' || path === '/register';
      };
    }
  })();