/*jshint esversion:6 */
(function(){
'use strict';

angular
  .module('helpdesk')
  .service('cadastroService', cadastroService);

cadastroService.$inject = ['$http', 'ngResource'];

function cadastroService($http){
  const url = "/v1/cadastros";

  this.submitForm = function(cadastro){
    return $http.post(url, cadastro);

  };
}
}());
