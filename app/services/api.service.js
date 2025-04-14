(function () {
    'use strict';
  
    angular
      .module('offMetaTFT')
      .factory('ApiService', ApiService);
  
    ApiService.$inject = ['$http'];
  
    function ApiService($http) {
      const baseUrl = 'http://localhost:8000/api';
  
      return {
        getUserById: function (id) {
          return $http.get(`${baseUrl}/user/${id}`);
        },
        login: function (data) {
          return $http.post(`${baseUrl}/auth/login`, data);
        },
        register: function (data) {
          return $http.post(`${baseUrl}/auth/register`, data);
        },
      };
    }
  })();