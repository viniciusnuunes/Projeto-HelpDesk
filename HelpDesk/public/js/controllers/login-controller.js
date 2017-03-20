(function() {
    'use strict';

    angular
        .module('helpdesk')
        .controller('loginController', loginController);

    loginController.$inject = ['$scope', '$http', '$location'];

    function loginController($scope, $http, $location) {

        /* jshint validthis: true*/
        var vm = this;

        vm.usuario = {};
        vm.mensagem = '';

        vm.limpaCampos = limpaCampos;
        vm.submitForm = submitForm;
        vm.autenticar = autenticar;


        function autenticar() {
            var usuario = vm.usuario;

            $http.post('/autenticar', {
                    login: vm.login.email,
                    senha: vm.login.senha
                })
                .then(function() {
                    $location.path('/');
                }, function(error) {
                    console.log(error);
                    vm.usuario = {};
                    vm.mensagem = 'Login ou senha inválidos';
                });
        }


        function limpaCampos() {
            this.login = {};
            $scope.formularioLogin.$setUntouched();
            $scope.formularioLogin.$setPristine();
            console.log("Limpando campos do formulário!");
        }


        function submitForm() {
            if (!formularioLogin.$invalid) {
                console.log('Formulario OK');
                this.limpaCampos();
            } else {
                console.log('erro!');
            }
        }

    }
})();
