angular.module( 'helpdesk', ['ngMaterial', 'ngMessages', 'ngRoute', 'ngResource', 'menuSuperiorDirective', 'angularUtils.directives.dirPagination'] )
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
