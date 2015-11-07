(function () {
    'use strict';

    angular.module('rb.core.components.blade').directive('rbBladeItem', function ($rootScope, $compile) {
        return {
            restrict: 'E',
            scope: {
                rbConfig: '='
            },
            link: function ($scope, element) {
                var component = '<{type} rb-config="config" ></{type}>'.replace('{type}', $scope.rbConfig.element);

                var scope = $rootScope.$new();

                $scope.$watch('rbConfig.data', function () {
                    scope.config = $scope.rbConfig.data;
                }, true);

                scope.config = $scope.rbConfig.data;

                element.append($compile(component)(scope));
            }
        };
    });
})();