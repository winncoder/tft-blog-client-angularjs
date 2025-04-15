(function () {
    'use strict';
  
    angular
      .module('offMetaTFT')
      .controller('ErrorController', ErrorController);
  
    function ErrorController() {
      const vm = this;
  
      vm.message = 'Something went wrong.';
    }
  })();
  