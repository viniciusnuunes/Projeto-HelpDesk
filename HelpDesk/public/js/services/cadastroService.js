/*jshint esversion:6 */
(function(){
'use strict';

angular
  .module('helpdesk')
  .service('cadastroService', cadastroService);

function cadastroService($http){
  var vm = this;
  const url = "/v1/cadastros";

  vm.submitForm = function(cadastro){
    console.log(cadastro);
    return $http.post(url, cadastro);

  };

  vm.consultar = function (cadastro){
      var promisse = $http.get(url);
    promisse
      .then(function(response) {
        vm.cadastro = response.data;
        console.log(vm.cadastro);
      })
      .catch(function(erro) {
        console.log(erro);
      });
      return $http.get();


  }


}


}());
