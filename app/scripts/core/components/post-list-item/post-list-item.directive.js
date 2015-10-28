(function () {
    'use strict';

    angular.module('rb.core.components.post-list-item').directive('rbPostListItem', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/scripts/core/components/post-list-item/post-list-item.directive.view.html',
            replace: true,
            scope: {
                rbConfig: '='
            },
            link: function ($scope) {
                $scope.open = false;

                $scope.showFullPost = function () {
                    $scope.rbConfig.open = true;

                    $scope.$emit('rb:post:showFull', $scope.rbConfig);
                };

                $scope.showDescriptionPost = function () {
                    $scope.rbConfig.open = false;
                };
            }
        };
    });
})();