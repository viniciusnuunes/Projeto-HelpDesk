var app = angular.module('menuSuperiorDirective', []);

app.directive('menuSuperior', function() {
  return {
      restrict: 'E',
      templateUrl: '/js/directives/menu-superior/menu-superior.html'
  };
});
