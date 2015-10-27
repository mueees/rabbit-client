(function () {
    'use strict';

    angular.module('rb.core.feed').factory('rbFeedManager', function (dialogs) {

        // add feed to category using feedId
        function addFeed(feed) {
            return dialogs.create(
                'app/scripts/core/feed/feed-add.controller.view.html',
                'rbFeedAddController', {
                    feed: feed
                }).result;
        }

        return {
            addFeed: addFeed
        };
    });
})();