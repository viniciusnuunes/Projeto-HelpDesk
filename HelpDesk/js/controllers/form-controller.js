$scope.teste = function(colaborador){
  alert(colaborador);
  console.log(colaborador)
}

$scope.submitForm = function(){
  if ($scope.formulario.$valid) {
    console.log('Formulario OK');
  }
})
();
