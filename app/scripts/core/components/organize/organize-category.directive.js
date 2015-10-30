(function () {
    'use strict';

    angular.module('rb.core.components.organize').directive('rbOrganizeCategory', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/scripts/core/components/organize/organize-category.directive.view.html',
            scope: {
                rbConfig: '='
            },
            link: function ($scope) {
                $scope.feedHandler = function (feed) {
                    $scope.$emit('rb:organize-category', {
                        category: $scope.rbConfig,
                        feed: feed
                    });
                };
            }
        };
    });
})();