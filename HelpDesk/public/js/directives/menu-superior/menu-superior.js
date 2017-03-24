(function() {
  'use strict';

    angular
      .module('menuSuperiorDirective', [])
      .directive('menuSuperior', menuSuperior);

      function menuSuperior() {

        return {
          restrict: 'E',
          templateUrl: '/js/directives/menu-superior/menu-superior.html'
        };
  }
})();
