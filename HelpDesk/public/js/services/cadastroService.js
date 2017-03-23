/*jslint node: true */
/*jshint esversion: 6 */

(function() {
'use strict';

angular
  .module('helpdesk')
  .service('cadastroService', cadastroService);

cadastroService.$inject = ['$http'];

function cadastroService($http) {

  const rota = "/v1/cadastros";

  this.cadastrar = function(formCadastro) {
    return $http.post(rota, formCadastro);
  };

  this.consultar = function() {
    return $http.get(rota);
  };

}
})();
