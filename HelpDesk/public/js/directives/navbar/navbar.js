var app = angular.module('menuSuperiorDirective', []);

app.directive('navbar', function() {
  return {
      restrict: 'E',
      templateUrl: '/js/directives/navbar/navbar.html'
  };
});
