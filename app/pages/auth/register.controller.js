(function () {
    'use strict';
  
    angular
      .module('offMetaTFT')
      .controller('RegisterController', RegisterController);
  
    RegisterController.$inject = ['$location', 'ApiService'];
  
    function RegisterController($location, ApiService) {
      var vm = this;
      vm.user = {};
  
      vm.register = function () {
        ApiService.register(vm.user)
          .then(function (res) {
            alert('Registration successful! Please log in.');
            $location.path('/login');
          })
          .catch(function (err) {
            alert('Registration failed. ' + (err.data.message || ''));
          });
      };
    }
  })();
  