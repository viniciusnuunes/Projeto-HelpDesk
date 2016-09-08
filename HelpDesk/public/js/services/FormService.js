/*jshint esversion:6 */

(function(){
  'use strict';

angular
.module('helpdesk')
.service('FormService', FormService);

FormService.$inject = ['$http'];

function FormService($http){
  const url = "/api/cadastro";

  this.submitForm = function(cadastro){
    return $http.post(url, cadastro);
    
  };
}
}());
