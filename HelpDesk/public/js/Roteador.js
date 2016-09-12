angular.module('helpdesk', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
      .when('/cadastro',{
        templateURL :   "src/views/index.html",
        controller  :   "form-controller.js",
        controllerAs:   "vm"
      });
  });
