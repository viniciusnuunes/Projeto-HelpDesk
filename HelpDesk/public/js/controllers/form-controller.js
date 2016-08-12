var helpdesk = angular.module('helpdesk',[]).
               controller('formController', function ($scope, $http) {

     $scope.submitForm = function (){
          /*db.cadastro.insert(req.body, function(err, doc){
               res.json(doc);*/
          console.log($scope.cadastro);

};

});

        /*if ($scope.formulario.$valid) {
             $http.post()


             console.log('Formulario OK');
         }
         else {
             console.log('erro!');
         }
     };
});*/

//// escrita de controller segundo o padrão Jhon Papa

/*(function () {
    'use strict';

    angular
        .module('helpdesk')
        .controller('formController', formController);

    formController.$inject = [];

    function formController() {

        var vm = this;
        vm.submitForm = submitForm;

        function submitForm() {
            if (formulario.$valid) {
                console.log('Formulario OK');
            }
            else {
                console.log('erro!');
            }
        }
    }
})();*/
