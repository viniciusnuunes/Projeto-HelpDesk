(function ($scope) {
'use strict';

angular
  .module('helpdesk')
  .controller('formController', formController);

formController.$inject = [];

function formController() {

/* jshint validthis: true*/
var vm = this;

vm.submitForm = submitForm;
vm.limpaCampos = limpaCampos;

function limpaCampos() {
  this.cadastro = {};
  $scope.formulario.$setPristine();
  console.log("Limpando campos do formulário!");
}

function submitForm() {
  if (!formulario.$valid) {
      console.log(this.cadastro);
      console.log('Formulario OK');
      this.limpaCampos();
  } else {
      console.log('erro!');
  }

}
}
})();

// Versão anterior do código. Para utilizá-la, remover
// o "as vm" da declaração do controller e o "vm."
// antes de todas as chamadas de função na index.html

/*angular.module('helpdesk')
.controller('formController', function($scope, $http) {

$scope.formulario = {};

$scope.limpaCampos = function() {
    $scope.cadastro = {};
    $scope.formulario.$setPristine(); //Seta o formulário para o estado sem interação do usuário
    console.log("Efetuada limpeza de campos");
};

    $scope.submitForm = function() {
        if ($scope.formulario.$valid) {
            console.log($scope.cadastro);
            console.log('Formulario OK');
            $scope.limpaCampos();
        } else {
            console.log('erro!');
        }
    };
});
*/
