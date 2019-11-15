(function() {
    'use strict';
  
    angular
      .module('app.login')
      .run(appRun);
  
    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
      routerHelper.configureStates(getStates());
    }
  
    function getStates() {
      return [
        {
          state: 'login',
          config: {
            url: '/',
            templateUrl: 'app/login/login.html',
            controller: 'LoginController',
            controllerAs: 'vm',
            title: 'dashboard',
            settings: {
              nav: 1,
              content: '<i class="fa fa-dashboard"></i> Login'
            }
          }
        }
      ];
    }
  })();
  