var helpdesk = angular.module('helpdesk')
.controller('formController', function($scope, $http) {

$scope.formulario = {};

    $scope.submitForm = function() {
        if ($scope.formulario.$valid) {            
            console.log($scope.cadastro);
            console.log('Formulario OK');
            $scope.cadastro = {};
            $scope.formulario.$setPristine();
        } else {
            console.log('erro!');
        }
    };
    $scope.refresh = function() {
//        $http.get('/').success(function(response) {
//            console.log("Efetuada limpeza de campos");
//            $scope.cadastro = response;
//            $scope.submitForm = "";
//            $scope.formulario.$setPristine();
//        });
        $scope.cadastro = {};
        $scope.formulario.$setPristine();
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
