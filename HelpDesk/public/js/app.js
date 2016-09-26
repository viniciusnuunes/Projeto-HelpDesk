// Criação do módulo principal do Angular.
// Todas as injeções de dependências DEVEM ser feitas
// neste arquivo!
angular.module( 'helpdesk', ['ngMessages', 'ngRoute', 'ngResource'] )
  .config(function($routeProvider) {
    $routeProvider
      .when('/cadastro',{
        templateUrl:"views/cadastro/cadastro.html",
        controller:"cadastroController",
        controllerAs:"cadastroController"
      })
      .when('/consulta',{
        templateUrl:"views/consulta/consulta.html",
        controller:"cadastroController",
        controllerAs:"cadastroController"
      });
    $routeProvider.otherwise({redirectTo: "/cadastro"});
  });
