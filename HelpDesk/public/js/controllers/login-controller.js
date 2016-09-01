(function () {
'use strict';

angular
  .module('helpdesk')
  .controller('loginController', loginController);

loginController.$inject = ['$scope'];

function loginController($scope) {

/* jshint validthis: true*/
var vm = this;

vm.limpaCampos = limpaCampos;
vm.submitForm = submitForm;

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
