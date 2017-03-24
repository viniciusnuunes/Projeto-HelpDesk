/*jslint node: true */
/*jshint esversion: 6 */

(function() {
    'use strict;'

    angular
        .module('helpdesk')
        .service('tokenInterceptor', tokenInterceptor);

    tokenInterceptor.$inject = ['$window', '$q', '$location'];

    function tokenInterceptor($window, $q, $location) {

        var interceptor = {};

        interceptor.response = function(response) {
            var token = response.headers('x-access-token');
            if (token) {
                console.log('Armazenando token recebido no navegador');
                $window.sessionStorage.token = token;
            }

            return response;
        };

        interceptor.request = function(config) {
            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                config.headers['x-access-token'] = $window.sessionStorage.token;
                console.log('Adicionando token no header da requisição para ser enviado ao servidor');
            }
            return config;
        };

        interceptor.responseError = function(rejection) {
            if (rejection != null && rejection.status == 401) {
                delete $window.sessionStorage.token;
                $location.path('/login');
            }
            return $q.reject(rejection);
        };

        return interceptor;
    }
})();
