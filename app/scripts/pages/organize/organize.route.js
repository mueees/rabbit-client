(function () {
    'use strict';

    angular.module('rb.organize').config(function ($stateProvider) {
        $stateProvider
            .state('app.organize', {
                url: '/organize',
                isLoginRequired: true,
                templateUrl: 'app/scripts/pages/organize/organize.view.html',
                controller: 'OrganizeController'
            });
    });
})();