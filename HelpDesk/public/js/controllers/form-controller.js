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

// - início - CONTEÚDO DOS OPTIONS DAS SELECTS
vm.aplicacao = [
  { "valor": "AREA_RESTRITA", "nome": "AREA RESTRITA" },
  { "valor": "CONCURSOS", "nome": "CONCURSOS" },
  { "valor": "Institucional", "nome": "Institucional" },
  { "valor": "Material_impresso", "nome": "Material impresso" },
  { "valor": "MEDELETRO", "nome": "MEDELETRO" },
  { "valor": "MEDCODE", "nome": "MEDCODE" },
  { "valor": "MEDREADER", "nome": "MEDREADER" },
  { "valor": "MEDSOFT", "nome": "MEDSOFT" },
  { "valor": "RECURSOS_Site", "nome": "RECURSOS (Site)" },
  { "valor": "RECURSOS_App", "nome": "RECURSOS (App)" },
  { "valor": "Nao_informada", "nome": "Não informada" },
  { "valor": "Outra", "nome": "Outra" }
];

vm.devices = [];
vm.devices.AREA_RESTRITA = [ { "nome": "Computador Mac" }, { "nome": "Computador Windows" }, { "nome": "iPad" }, { "nome": "iPhone" }, { "nome": "Smartphone Android" }, { "nome": "Tablet Android" }, { "nome": "Não informado" }, { "nome": "Outro" } ];
vm.devices.CONCURSOS = [ { "nome": "Computador Mac" }, { "nome": "Computador Windows" }, { "nome": "iPad" }, { "nome": "iPhone" }, { "nome": "Smartphone Android" }, { "nome": "Tablet Android" }, { "nome": "Não informado" }, { "nome": "Outro" } ];
vm.devices.Institucional = [ { "nome": "Computador Mac" }, { "nome": "Computador Windows" }, { "nome": "iPad" }, { "nome": "iPhone" }, { "nome": "Smartphone Android" }, { "nome": "Tablet Android" }, { "nome": "Não informado" }, { "nome": "Outro" } ];
vm.devices.RECURSOS_Site = [ { "nome": "Computador Mac" }, { "nome": "Computador Windows" }, { "nome": "iPad" }, { "nome": "iPhone" }, { "nome": "Smartphone Android" }, { "nome": "Tablet Android" }, { "nome": "Não informado" }, { "nome": "Outro" } ];
vm.devices.Material_impresso = [ { "nome": "Nenhum" } ];
vm.devices.MEDELETRO = [ { "nome": "iPad" }, { "nome": "iPhone" }, { "nome": "Smartphone Android" }, { "nome": "Tablet Android" }, { "nome": "Não informado" }, { "nome": "Outro" } ];
vm.devices.MEDCODE = [ { "nome": "iPad" }, { "nome": "iPhone" }, { "nome": "Smartphone Android" }, { "nome": "Tablet Android" }, { "nome": "Não informado" }, { "nome": "Outro" } ];
vm.devices.RECURSOS_App = [ { "nome": "iPad" }, { "nome": "iPhone" }, { "nome": "Smartphone Android" }, { "nome": "Tablet Android" }, { "nome": "Não informado" }, { "nome": "Outro" } ];
vm.devices.MEDREADER = [ { "nome": "iPad" }, { "nome": "iPhone" }, { "nome": "Tablet Android" }, { "nome": "Não informado" }, { "nome": "Outro" } ];
vm.devices.MEDSOFT = [ { "nome": "Computador Windows" }, { "nome": "iPad" }, { "nome": "iPhone" }, { "nome": "Smartphone Android" }, { "nome": "Tablet Android" }, { "nome": "Não informado" }, { "nome": "Outro" } ];
vm.devices.Nao_informada = [ { "nome": "Não informado" }, { "nome": "Outro" } ];
vm.devices.Outra = [ { "nome": "Não informado" }, { "nome": "Outro" } ];

vm.entrada = [
  { "valor": "Demanda", "nome": "Demanda" },
  { "valor": "E-Mail", "nome": "E-Mail" },
  { "valor": "Freshdesk", "nome": "Freshdesk" },
  { "valor": "Spark", "nome": "Spark" },
  { "valor": "Telefone", "nome": "Telefone" }
];

vm.origem = [
  { "valor": "Aluno", "nome": "Aluno" },
  { "valor": "MEDGRUPO", "nome": "MEDGRUPO" }
];

vm.status = [
  { "valor": "Solucionado", "nome": "Solucionado" },
  { "valor": "Parcial", "nome": "Parcial" },
  { "valor": "Pendente", "nome": "Pendente" }
];
// - fim - CONTEÚDO DOS OPTIONS DAS SELECTS

}
})();
