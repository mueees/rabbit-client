(function () {
    'use strict';

    angular.module('rb.core.components.category-feeds').directive('rbCategoryFeeds', function (rbCategoryResource) {
        return {
            restrict: 'E',
            templateUrl: 'app/scripts/core/components/category-feeds/category-feeds.directive.view.html',
            scope: {
                rbConfig: '='
            },
            link: function ($scope, element) {
                $scope.toggleFeeds = function () {
                    $scope.rbConfig.open = !$scope.rbConfig.open;

                    rbCategoryResource.edit($scope.rbConfig._id, {
                        open: $scope.rbConfig.open
                    });
                };
            }
        };
    });
})();