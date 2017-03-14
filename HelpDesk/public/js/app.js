// Criação do módulo principal do Angular.
// Todas as injeções de dependências DEVEM ser feitas
// neste arquivo!
angular.module( 'helpdesk', ['ngMessages', 'ngRoute', 'ngResource', 'menuSuperiorDirective'] )
  .config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(); // Colocar true entre parenteses para retirar a # da URL
    $routeProvider
      .when('/login',{
        templateUrl:"views/login.html",
        controller:"loginController",
        controllerAs:"loginController"
      })
      .when('/cadastro',{
        templateUrl:"views/cadastro/cadastro.html",
        controller:"cadastroController",
        controllerAs:"vm"
      })
      .when('/consulta',{
        templateUrl:"views/consulta/consulta.html",
        controller:"cadastroController",
        controllerAs:"vm"
      });
    $routeProvider.otherwise({redirectTo: "/cadastro"});
  });
