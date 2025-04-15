(function () {
  'use strict';

  angular
    .module('offMetaTFT')
    .controller('UserEditController', UserEditController);

  UserEditController.$inject = ['$routeParams', '$location', 'ApiService', 'AuthService'];

  function UserEditController($routeParams, $location, ApiService, AuthService) {
    var vm = this;
    vm.loading = true;
    vm.user = {};

    const userId = $routeParams.id;
    const loggedInUserId = AuthService.getUserIdFromToken();

    if (String(userId) !== String(loggedInUserId)) {
      $location.path('/403');
      return;
    }

    ApiService.getUserById(userId)
      .then(function (res) {
        vm.user = res.data;
        vm.loading = false;
      })
      .catch(function (err) {
        console.error('Failed to load user', err);
        vm.loading = false;
      });

    vm.updateUser = function () {
      ApiService.updateUser(userId, vm.user)
        .then(function () {
          alert('User updated successfully!');
          $location.path('/users/' + userId);
        })
        .catch(function (err) {
          alert('Failed to update user: ' + (err.data.message || ''));
        });
    };
  }
})();
