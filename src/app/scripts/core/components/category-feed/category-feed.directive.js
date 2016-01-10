(function () {
    'use strict';

    angular.module('rb.core.components.category-feed').directive('rbCategoryFeed', function (rbCategoryResource, $rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/core/components/category-feed/category-feed.directive.view.html',
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

                $scope.feedHandler = function () {
                    $rootScope.$broadcast('mueSidebar:close', $scope.close);
                };
            }
        };
    });
})();