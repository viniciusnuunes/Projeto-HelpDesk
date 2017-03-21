(function() {
    'use strict';

    angular
        .module('helpdesk')
        .controller('logoutController', logoutController);

    logoutController.$inject = ['$scope', '$http', '$location', '$window'];

    function logoutController($scope, $http, $location, $window) {

        /* jshint validthis: true*/
        var vm = this;
        vm.sair = sair;

        function sair(){
          delete $window.sessionStorage.token;
          $location.path('/login');
        }
    }
})();
