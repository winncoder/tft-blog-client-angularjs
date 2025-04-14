(function () {
  'use strict';

  angular
    .module('offMetaTFT')
    .controller('UserDetailCtrl', UserDetailCtrl);

  UserDetailCtrl.$inject = ['$routeParams', 'ApiService'];

  function UserDetailCtrl($routeParams, ApiService) {
    const vm = this;
    vm.loading = true;
    vm.user = {};

    const userId = $routeParams.id;

    ApiService.getUserById(userId)
      .then(function (response) {
        vm.user = response.data;
        vm.loading = false;
      })
      .catch(function (error) {
        console.error('Error loading user:', error);
        vm.loading = false;
      });
  }
})();
