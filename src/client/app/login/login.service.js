(function() {
    'use strict';
  
    angular
      .module('app.login')
      .factory('loginService', loginService);
  
    loginService.$inject = ['$http', 'exception', 'logger'];
    /* @ngInject */
    function loginService($http, exception, logger) {
      var service = {
        authenticate: authenticate,
      };
  
      return service;
  
      function authenticate(username, password) {
        return $http.post('/api/authenticate', { username: username, password: password })
            .then(success)
            .catch(fail);
  
        function success(response) {
            // logger.log(response);
            return response;
        }
  
        function fail(e) {
            exception.catcher('XHR Failed for authenticate')(e);
        }
      }
    }
  })();
  