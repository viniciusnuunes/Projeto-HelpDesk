(function () {
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
