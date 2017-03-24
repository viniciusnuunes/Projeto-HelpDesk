(function() {
  'use strict';

  angular
    .module('helpdesk')
    .controller('consultaController', consultaController);

  consultaController.$inject = ['$http', '$scope', 'consultaService'];

  function consultaController($http, $scope, consultaService) {
    /* jshint validthis: true*/
    var vm = this;

    vm.cadastros = [];
    vm.ordenar = ordenar;
    vm.sortKey = "data";
    vm.reverse = true;
    vm.filtrarConsulta = filtrarConsulta;

    consultaService.query(function(cadastros){
      vm.cadastros = cadastros;
    }, function(error){
      console.log(error);
    });

    function ordenar(keyname) {
      vm.sortKey = keyname;
      vm.reverse = !vm.reverse;
    }

    function filtrarConsulta(filtro1, filtro2) {
      switch (filtro2) {
        case "colaborador":
          vm.filtrarColaborador = filtro1;
          if(vm.filtrarColaborador===null)
            vm.filtrarColaborador="";
          break;
        case "entrada":
          vm.filtrarEntrada = filtro1;
          if(vm.filtrarEntrada===null)
            vm.filtrarEntrada="";
          break;
        case "origem":
          vm.filtrarOrigem = filtro1;
          if(vm.filtrarOrigem===null)
            vm.filtrarOrigem="";
          break;
        case "aplicacao":
          vm.filtrarAplicacao = filtro1;
          if(vm.filtrarAplicacao===null)
            vm.filtrarAplicacao="";
          break;
        case "device":
          vm.filtrarDevice = filtro1;
          if(vm.filtrarDevice===null)
            vm.filtrarDevice="";
          break;
        case "status":
          vm.filtrarStatus = filtro1;
          if(vm.filtrarStatus===null)
            vm.filtrarStatus="";
          break;
        case "problema":
          vm.filtrarProblema = filtro1;
          if(vm.filtrarProblema===null)
            vm.filtrarProblema="";
          break;
        case "idFreshdesk":
          vm.filtrarIdFreshdesk = filtro1;
          if(vm.filtrarIdFreshdesk===null)
            vm.filtrarIdFreshdesk="";
          break;
        case "idAluno":
          vm.filtrarIdAluno = filtro1;
          if(vm.filtrarIdAluno===null)
            vm.filtrarIdAluno="";
          break;
        case "data":
          vm.filtrarData = filtro1;
          if(vm.filtrarData===null)
            vm.filtrarData="";
          break;
        case "diagnostico":
          vm.filtrarDiagnostico = filtro1;
          if(vm.filtrarDiagnostico===null)
            vm.filtrarDiagnostico="";
          break;
        case "resposta":
          vm.filtrarResposta = filtro1;
          if(vm.filtrarResposta===null)
            vm.filtrarResposta="";
          break;
        case "observacoes":
          vm.filtrarObservacoes = filtro1;
          if(vm.filtrarObservacoes===null)
            vm.filtrarObservacoes="";
          break;
        default:
          vm.filtrarColaborador="";
          vm.filtrarEntrada="";
          vm.filtrarOrigem="";
          vm.filtrarAplicacao="";
          vm.filtrarDevice="";
          vm.filtrarStatus="";
          vm.filtrarProblema="";
          vm.filtrarIdFreshdesk="";
          vm.filtrarIdAluno="";
          vm.filtrarData="";
          vm.filtrarDiagnostico="";
          vm.filtrarResposta="";
          vm.filtrarObservacoes="";
      }
    }

  }
})();
