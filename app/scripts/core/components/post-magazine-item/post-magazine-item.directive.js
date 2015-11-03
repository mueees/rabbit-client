(function () {
    'use strict';

    angular.module('rb.core.components.post-magazine-item').directive('rbPostMagazineItem', function ($filter, rbPostResource, relativeDate) {
        return {
            restrict: 'E',
            templateUrl: 'app/scripts/core/components/post-magazine-item/post-magazine-item.directive.view.html',
            replace: true,
            scope: {
                rbConfig: '='
            },
            link: function ($scope) {
                $scope.open = false;

                relativeDate.set(new Date($scope.rbConfig.public_date), function (date) {
                    $scope.public_date = date;
                });

                $scope.description = $filter('limitTo')($scope.rbConfig.description, 200);
            }
        };
    });
})();