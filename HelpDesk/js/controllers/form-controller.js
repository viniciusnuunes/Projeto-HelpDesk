angular.module('helpdesk').controller('formController', function($scope) {

  $scope.submitForm = function(){
    if ($scope.formulario.$valid) {
      console.log('Formulario OK');
    }
      else {
        console.log('erro!');
      }
  };
});
