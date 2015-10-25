(function () {
    'use strict';

    angular.module('rb.login').config(function ($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                isLoginRequired: false,
                templateUrl: 'app/scripts/pages/login/login.view.html',
                controller: 'LoginController'
            });
    });
})();