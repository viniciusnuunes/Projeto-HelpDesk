/*jshint esversion:6 */
(function(){
'use strict';

angular
  .module('helpdesk')
  .service('cadastroService', cadastroService);

cadastroService.$inject = ['$http'];

function cadastroService($http){
  const url = "/api/cadastro";

  this.submitForm = function(cadastro){
    return $http.post(url, cadastro);

  };
}
}());
