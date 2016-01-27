(function () {
    'use strict';
    angular.module('rb.core.resources').factory('rbFeedResource', function ($q, MueResource) {
        var path = 'rabbit/feeds',
            Feed = MueResource.withConfig(function (RestangularConfigurer) {

            });

        return {
            get: function (feedId) {
                return Feed.one(path + '/' + feedId).get();
            },

            follow: function (feedId, categoryId) {
                var feed = Feed.one(path);

                feed.feedId = feedId;
                feed.categoryId = categoryId;

                return feed.put();
            },

            popular: function (count) {
                count = count || 3;

                return Feed.one(path + '/popular?count=' + count).get();
            },

            topic: function (topicId) {
                return Feed.one(path + '/topic/' + topicId).get();
            },

            find: function (query) {
                return Feed.all(path + '/find').post({
                    query: query
                });
            }
        };
    });
})();