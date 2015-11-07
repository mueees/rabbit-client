(function () {
    'use strict';

    angular.module('rb.core.components.post-item').directive('rbPostItem', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/scripts/core/components/post-item/post-item.directive.view.html',
            replace: true,
            scope: {
                rbConfig: '='
            }
        };
    });
})();