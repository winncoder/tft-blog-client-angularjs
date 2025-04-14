(function () {
    'use strict';
  
    angular
      .module('offMetaTFT')
      .directive('topnav', topnav);
  
    function topnav() {
      return {
        restrict: 'E',
        templateUrl: 'app/layout/topnav.html',
        controller: 'TopNavController',
        controllerAs: 'vm'
      };
    }
  })();