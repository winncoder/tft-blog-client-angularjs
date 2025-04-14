(function () {
    'use strict';
  
    angular
      .module('offMetaTFT')
      .controller('ErrorController', ErrorController);
  
    function ErrorController() {
      const vm = this;
  
      // Bạn có thể tùy chọn hiển thị theo route
      vm.message = 'Something went wrong.';
    }
  })();
  