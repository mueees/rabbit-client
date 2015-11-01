(function () {
    'use strict';

    angular.module('rb.core.components.organize').directive('rbOrganize', function (rbCategoryResource, dialogs) {
        return {
            restrict: 'E',
            templateUrl: 'app/scripts/core/components/organize/organize.directive.view.html',
            scope: {
                rbConfig: '='
            },
            link: function ($scope, element) {
                $scope.categories = [];

                function init() {
                    rbCategoryResource.getAll().then(function (categories) {
                        $scope.categories = categories.plain();
                    });
                }

                $scope.$on('rb:organize-category:feed', function (event, data) {
                    data.categories = $scope.categories;

                    dialogs.create('app/scripts/core/components/organize/organize-feed-manager.view.html',
                        'rbOrganizeFeedManagerController',
                        data, {
                            copy: false,
                            size: 'sm'
                        });
                });

                $scope.$on('rb:organize-category:category', function (event, data) {
                    data.categories = $scope.categories;

                    dialogs.create('app/scripts/core/components/organize/organize-category-manager.view.html',
                        'rbOrganizeCategoryManagerController',
                        data, {
                            copy: false,
                            size: 'sm'
                        });
                });

                init();
            }
        };
    });
})();