(function () {
    'use strict';
  
    angular
      .module('offMetaTFT')
      .controller('LoginController', LoginController);
  
    LoginController.$inject = ['$location', 'ApiService'];
  
    function LoginController($location, ApiService) {
      var vm = this;
      vm.user = {};
  
      vm.login = function () {
        ApiService.login(vm.user)
          .then(function (res) {
            localStorage.setItem('token', res.data.token);
            $location.path('/posts');
          })
          .catch(function (err) {
            alert('Login failed');
          });
      };
    }
  })();
  