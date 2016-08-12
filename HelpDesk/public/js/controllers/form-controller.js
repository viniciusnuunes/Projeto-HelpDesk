var helpdesk = angular.module('helpdesk', ['ngMessages']).
controller('formController', function($scope, $http) {

    $scope.submitForm = function() {
        if ($scope.formulario.$valid) {
            console.log($scope.cadastro);
            console.log('Formulario OK');
        } else {
            console.log('erro!');
        }
    };
    $scope.refresh = function() {
        $http.get('/').success(function(response) {
            console.log("Efetuada limpeza de campos");
            $scope.cadastro = response;
            $scope.submitForm = "";
        });
    };




});




//// escrita de controller segundo o padrão Jhon Papa

/*(function () {
'use strict';

angular
.module('helpdesk')
.controller('formController', formController);

formController.$inject = [];

function formController() {

var vm = this;
vm.submitForm = submitForm;

function submitForm() {
if (formulario.$valid) {
console.log('Formulario OK');
}
else {
console.log('erro!');
}
}
}
})();*/
