(function () {
    'use strict';
    angular.module('rb.search').controller('SearchController', function ($rootScope,
                                                                         $scope,
                                                                         rbFeedResource,
                                                                         rbFeedManager) {
        $scope.query = '';
        $scope.feeds = [];

        $scope.$watch('query', function (newValue) {
            if (!newValue) {
                $scope.feeds = [];
            } else {
                rbFeedResource.find($scope.query).then(function (feeds) {
                    $scope.feeds = feeds;
                });
            }
        });

        var cleanListener = $rootScope.$on('rb:follow:feed', function (event, feed) {
            rbFeedManager.addFeed(feed);
        });

        $scope.$on('$destroy', function() {
            cleanListener();
        });
    });
})();