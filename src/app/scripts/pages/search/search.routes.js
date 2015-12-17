(function () {
    'use strict';

    angular.module('rb.search').config(function ($stateProvider) {
        $stateProvider
            .state('app.search', {
                url: '/search',
                templateUrl: 'scripts/pages/search/search.view.html',
                controller: 'SearchController'
            });
    });
})();