angular.module('helpdesk').controller('formController', function($scope) {

  $scope.teste = function(colaborador){
    alert(colaborador);
    console.log(colaborador)
  }

  $scope.submitForm = function(){
    if ($scope.formulario.$valid) {
      console.log('Formulario OK');
    }
      else {
        console.log('erro!');
      }
  };
});
