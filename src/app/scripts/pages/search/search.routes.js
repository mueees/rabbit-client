(function () {
    'use strict';

    angular.module('rb.search').config(function ($stateProvider) {
        $stateProvider
            .state('app.search', {
                url: '/search',
                templateUrl: 'scripts/pages/search/search.view.html',
                controller: 'SearchController'
            })
            .state('app.topic', {
                url: '/topic/:topicId',
                templateUrl: 'scripts/pages/search/topic.view.html',
                controller: 'TopicController',
                resolve: {
                    topics: function (rbTopicResource) {
                        return rbTopicResource.getAll();
                    },
                    feeds: function (rbFeedResource, $stateParams) {
                        return rbFeedResource.topic($stateParams.topicId);
                    }
                }
            });
    });
})();