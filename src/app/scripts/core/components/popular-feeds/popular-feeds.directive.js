(function () {
    'use strict';

    angular.module('rb.core.components.popular-feeds').directive('rbPopularFeeds', function (rbFeedResource) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/core/components/popular-feeds/popular-feeds.directive.view.html',
            scope: {
                rbConfig: '='
            },
            link: function ($scope, element) {
                $scope.feeds = [];

                rbFeedResource.popular().then(function (data) {
                    $scope.feeds = data;
                });

                $scope.$on('rb:feed:followed', function (event, data) {
                    rbFeedResource.popular().then(function (data) {
                        $scope.feeds = data;
                    });
                });
            }
        };
    });
})();