/*jslint node: true */
/*jshint esversion: 6 */

(function() {
'use strict';

angular
  .module('helpdesk')
  .service('cadastroService', cadastroService);

cadastroService.$inject = ['$http'];

function cadastroService($http) {

  const url = "/v1/cadastros";

  this.submitForm = function(formCadastro) {
    return $http.post(url, formCadastro);
  };

  this.consultar = function() {
    return $http.get(url);
  };

}
})();
