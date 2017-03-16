/*jslint node: true */
/*jshint esversion: 6 */

(function() {
'use strict';

angular
  .module('helpdesk')
  .service('cadastroService', cadastroService);

cadastroService.$inject = ['$http', '$resource'];

function cadastroService($http, $resource) {

  var vm = this;
  vm.submitForm = submitForm;
  vm.consultar = consultar;

  return $resource('/v1/cadastros/:cadastroId', null, {
      'update' : {
        method: 'PUT'
      }
  });

  const url = "/v1/cadastros";

  function submitForm(formCadastro) {
    return $http.post(url, formCadastro);
  };

  function consultar() {
    return $http.get(url);
  };

}
})();
