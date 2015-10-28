(function () {
    'use strict';

    angular.module('rb.core.components.feed-timeline').directive('rbFeedTimeline', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/scripts/core/components/feed-timeline/feed-timeline.directive.view.html',
            scope: {
                rbConfig: '='
            },
            link: function ($scope, element) {

            }
        };
    });
})();