(function() {
'use strict';

angular
  .module('helpdesk')
  .controller('consultaController', consultaController);

consultaController.$inject = [];

function consultaController() {

  /* jshint validthis: true*/
  var vm = this;

vm.consultar = consultar;

  function consultar() {
    
  }

}
})();
