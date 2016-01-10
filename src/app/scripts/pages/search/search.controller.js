(function () {
    'use strict';
    angular.module('rb.search').controller('SearchController', function ($rootScope,
                                                                         $scope,
                                                                         rbFeedResource) {
        $scope.query = '';
        $scope.feeds = [];

        $scope.$watch('query', function (newValue) {
            if (!newValue) {
                $scope.feeds = [];
            } else {
                rbFeedResource.find($scope.query).then(function (feeds) {
                    $scope.feeds = _.sortByOrder(feeds, ['statistic.followedByUser', 'statistic.countPostPerMonth'], ['desc', 'desc']);
                });
            }
        });
    });
})();