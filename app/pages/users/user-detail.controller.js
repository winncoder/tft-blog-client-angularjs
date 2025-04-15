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

      vm.goToEditPage = function() {
        $location.path('/user/' + vm.user.id + '/edit');
      };

      vm.deleteUser = function() {
        if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
          ApiService.deleteUser(vm.user.id)
            .then(function () {
              alert('Your account has been deleted.');
              localStorage.removeItem('token');
              localStorage.removeItem('username');
              $location.path('/login');
            })
            .catch(function (error) {
              console.error('Error deleting user:', error);
              alert('Failed to delete account. Please try again.');
            })
        }
      };
  }
})();
