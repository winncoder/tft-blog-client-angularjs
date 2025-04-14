(function () {
    'use strict';
  
    angular
      .module('offMetaTFT')
      .factory('ApiService', ApiService);
  
    ApiService.$inject = ['$http'];
  
    function ApiService($http) {
      const baseUrl = 'http://localhost:8000/api';
  
      return {
        getUser: function () {
          return $http.get(`${baseUrl}/user`);
        },
        getUserById: function (id) {
          return $http.get(`${baseUrl}/user/${id}`);
        },
        login: function (data) {
          return $http.post(`${baseUrl}/auth/login`, data);
        },
        register: function (data) {
          return $http.post(`${baseUrl}/auth/register`, data);
        },
        updateUser: function (id, data) {
          return $http.put(`${baseUrl}/user/${id}`, data);
        },
        deleteUser: function (id, data) {
          return $http.delete(`${baseUrl}/user/${id}`, data);
        }
        
      };
    }
  })();