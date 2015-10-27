(function () {
    'use strict';

    angular.module('rb.core.components.feed-card').directive('rbFeedCard', function ($rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'app/scripts/core/components/feed-card/feed-card.directive.view.html',
            scope: {
                rbConfig: '='
            },
            link: function ($scope, element) {
                $scope.follow = function () {
                    $rootScope.$broadcast('rb:follow:feed', $scope.rbConfig);
                };
            }
        };
    });
})();