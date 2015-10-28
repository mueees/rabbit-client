(function () {
    'use strict';
    angular.module('rb.feed').controller('FeedController', function ($scope, posts) {
        $scope.feedTimelineConfig = {
            posts: posts
        };
    });
})();