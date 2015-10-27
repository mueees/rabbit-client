(function () {
    'use strict';

    angular.module('rb.core.components.category-feeds').directive('rbCategoryFeeds', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/scripts/core/components/category-feeds/category-feeds.directive.view.html',
            scope: {
                rbConfig: '='
            },
            link: function ($scope, element) {

            }
        };
    });
})();