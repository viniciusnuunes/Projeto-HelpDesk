(function() {
  'use strict';

  angular
    .module('helpdesk')
    .controller('consultaController', consultaController);

  consultaController.$inject = ['$http', '$scope', '$routeParams', 'consultaService'];

  function consultaController($http, $scope, $routeParams, consultaService) {
    /* jshint validthis: true*/
    var vm = this;

    vm.cadastros = [];
    vm.ordenar = ordenar;
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

    function filtrarConsulta(filtro) {
      vm.filtrarColuna = filtro;
      if(vm.filtrarColuna===null) {
        vm.filtrarColuna="";
      }
    }

  }
})();
