(function () {
    'use strict';

    angular.module('rb.feed').config(function ($stateProvider) {
        $stateProvider
            .state('app.feed', {
                url: '/feed/{id}',
                templateUrl: 'scripts/pages/feed/feed.view.html',
                controller: 'FeedController'
            });
    });
})();