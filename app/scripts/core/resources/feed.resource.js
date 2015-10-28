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
            find: function (query) {
                return Feed.all(path + '/find').post({
                    query: query
                });
            }
        };
    });
})();