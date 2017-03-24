/*jslint node: true */
/*jshint esversion: 6 */

(function() {
'use strict';

angular
  .module('helpdesk')
  .service('consultaService', consultaService);

consultaService.$inject = ['$http', '$resource'];

function consultaService($http, $resource) {

      return $resource('/v1/cadastros/:cadastroId', null, {
        'update' : {
          method: 'PUT'
        }
    });

  }
})();
