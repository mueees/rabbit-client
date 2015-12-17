(function () {
    'use strict';
    angular.module('rb.feed').controller('FeedController', function ($scope, $stateParams) {
        $scope.feedTimelineConfig = {
            feedId: $stateParams.id
        };
    });
})();