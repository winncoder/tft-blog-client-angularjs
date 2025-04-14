(function () {
    'use strict';
  
    angular
      .module('offMetaTFT')
      .factory('AuthService', AuthService);
  
    AuthService.$inject = ['$window'];
  
    function AuthService($window) {
      return {
        getToken: getToken,
        getUserIdFromToken: getUserIdFromToken,
        getUsernamelFromToken: getUsernamelFromToken,
        getUserEmailFromToken: getUserEmailFromToken,
      };
  
      function getToken() {
        return $window.localStorage.getItem('token');
      }

  
      function parseJwt(token) {
        try {
          const base64Url = token.split('.')[1];
          const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          return JSON.parse($window.atob(base64));
        } catch (e) {
          return null;
        }
      }
  
      function getUserIdFromToken() {
        const token = getToken();
        const payload = parseJwt(token);
        return payload?.data?.id || null;
      }

      function getUsernamelFromToken() {
        const token = getToken();
        const payload = parseJwt(token);
        return payload?.data?.username || null;
      }
  
      function getUserEmailFromToken() {
        const token = getToken();
        const payload = parseJwt(token);
        return payload?.data?.email || null;
      }
    }
  })();
  