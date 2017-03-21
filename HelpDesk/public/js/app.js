// Criação do módulo principal do Angular.
// Todas as injeções de dependências DEVEM ser feitas
// neste arquivo!
angular.module( 'helpdesk', ['ngMessages', 'ngRoute', 'ngResource', 'menuSuperiorDirective'] )
  .config(function($routeProvider, $locationProvider, $httpProvider) {

    $httpProvider.interceptors.push('tokenInterceptor');

    $routeProvider
      .when('/login',{
        templateUrl:"views/login.html",
        controller:"loginController",
        controllerAs:"vm"
      })
      .when('/logout',{
        templateUrl:"views/logout.html",
        controller:"logoutController",
        controllerAs:"vm"
      })
      .when('/cadastro',{
        templateUrl:"views/cadastro/cadastro.html",
        controller:"cadastroController",
        controllerAs:"vm"
      })
      .when('/consulta',{
        templateUrl:"views/consulta/consulta.html",
        controller:"consultaController",
        controllerAs:"vm"
      });
    $routeProvider.otherwise({redirectTo: "/cadastro"});
  });
