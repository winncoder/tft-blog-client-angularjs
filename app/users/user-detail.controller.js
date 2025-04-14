(function () {
  'use strict';

  angular
    .module('offMetaTFT')
    .controller('UserDetailCtrl', UserDetailCtrl);

  UserDetailCtrl.$inject = ['$routeParams', '$location', 'ApiService'];

  function UserDetailCtrl($routeParams, $location, ApiService) {
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

    // Go to the edit page
    vm.goToEditPage = function() {
      $location.path('/user/' + vm.user.id + '/edit');
    };
  }
})();
