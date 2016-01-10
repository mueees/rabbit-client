(function () {
    'use strict';

    angular.module('rb.core.components.feed-icon').directive('rbFeedIcon', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/core/components/feed-icon/feed-icon.directive.view.html',
            scope: {
                rbConfig: '='
            }
        };
    });
})();