(function () {
'use strict';

angular
  .module('helpdesk')
  .controller('formController', formController);

formController.$inject = ['$http'];

function formController($http) {

/* jshint validthis: true*/
var vm = this;

vm.submitForm = submitForm;
vm.limpaCampos = limpaCampos;

function limpaCampos() {
  this.cadastro = {};
  console.log("Limpando campos do formulário!");
}

function submitForm() {
  if (!formulario.$valid) {
    $http.post('/cadastro', this.cadastro);
      console.log(this.cadastro);
      console.log('Formulario OK');
      this.limpaCampos();
  } else {
      console.log('erro!');
  }
}

}
})();
