(function() {
  'use strict';

  angular
    .module('helpdesk')
    .controller('entradaController', entradaController);

  entradaController.$inject = ['$http', '$scope'];

  function entradaController($http, $scope) {
    /* jshint validthis: true*/

    $http.get('/v1/entradas')
			.success(function(entradas) {
			$scope.entradas = entradas;
		})
		.error(function(erro) {
			console.log(erro);
		});

  }
})();
