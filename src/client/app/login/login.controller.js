(function() {
    'use strict';
  
    angular
      .module('app.login')
      .controller('LoginController', LoginController);
  
    LoginController.$inject = ['logger', 'loginService', '$location'];
    /* @ngInject */
    function LoginController(logger, loginService, $location) {
        var vm = this;
        vm.login = login;
        vm.signOut = signOut;
        vm.reqHappened = false;
        vm.succesfulFetch = false;
        vm.userData = {};

        function signOut(){
            // logger.info('I logged out');
            vm.reqHappened = false;
            vm.succesfulFetch = false;
            vm.username = '';
            vm.password = '';
            $location.path('/');
        }

        function login() {
            vm.reqHappened = true;
            loginService.authenticate(vm.username, vm.password).then(function (response) {
                if(response){
                    vm.succesfulFetch = true;
                    vm.userData = response.data;
                    // logger.info(JSON.stringify(response));
                } else {
                    vm.succesfulFetch = false;
                }
            });
        };

    }
  })();