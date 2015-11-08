(function () {
    'use strict';

    angular.module('rb.core.components.post-item').directive('rbPostItem', function ($timeout) {
        return {
            restrict: 'E',
            templateUrl: 'app/scripts/core/components/post-item/post-item.directive.view.html',
            replace: true,
            scope: {
                rbConfig: '='
            },
            link: function ($scope, element) {
                $timeout(function () {
                    $scope.showTitleImage = !element[0].querySelectorAll('.rb-post-item-body img').length;
                });
            }
        };
    });
})();