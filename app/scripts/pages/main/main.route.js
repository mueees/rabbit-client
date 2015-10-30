(function () {
    'use strict';

    angular.module('rb.main').config(function ($stateProvider) {
        $stateProvider
            .state('app.main', {
                url: '/main',
                isLoginRequired: true,
                templateUrl: 'app/scripts/pages/main/main.view.html',
                controller: 'MainController'
            })

            // page with all topics
            .state('app.discovery', {
                url: '/discovery'
            });
    });
})();