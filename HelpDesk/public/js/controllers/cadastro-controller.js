(function () {
'use strict';

angular
  .module('helpdesk')
  .controller('cadastroController', cadastroController);

cadastroController.$inject = ['$http', '$scope', '$routeParams','cadastroService'];

function cadastroController($http, $scope, $routeParams) {

/* jshint validthis: true*/
var vm = this;

vm.limpaCampos = limpaCampos;
vm.limpaIdFreshdesk = limpaIdFreshdesk;
vm.submitForm = submitForm;
vm.consultar = consultar;

function limpaCampos(formulario) {
  if(formulario){
    vm.cadastro = {};
    formulario.$setUntouched();
    formulario.$setPristine();
    console.log("Limpando campos do formulário!");
}
}

function limpaIdFreshdesk(formulario) {
  if(formulario){
  vm.cadastro.idFreshdesk = "";
  formulario.idFreshdesk.$setUntouched();
  formulario.idFreshdesk.$setPristine();
}
}

function submitForm(formulario) {
cadastroService.submitForm(formulario)
  .success (function(data) {
    console.log('Formulario OK');
    vm.limpaCampos();
  })
  .error (function(data){
    console.log(data);
  });
}

function consultar() {

cadastroService.consultar()
.success(function(data){
  vm.cadastro = data;
})
.error(function(data){
  console.log(data);

});
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
