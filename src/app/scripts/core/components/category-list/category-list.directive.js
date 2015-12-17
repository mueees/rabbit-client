(function () {
    'use strict';

    angular.module('rb.core.components.category-list').directive('rbCategoryList', function (rbCategoryResource) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/core/components/category-list/category-list.directive.view.html',
            scope: {
                rbConfig: '='
            },
            link: function ($scope, element) {
                $scope.newCategory = '';
                $scope.categories = [];

                $scope.selection = {
                    ids: {}
                };

                $scope.$watch('selection.ids', function () {
                    var categoryId = _.keys(_.pick($scope.selection.ids, _.identity))[0];

                    $scope.rbConfig.category = _.find($scope.categories, {
                        _id: categoryId
                    });
                }, true);

                $scope.createCategory = function () {
                    rbCategoryResource.create({
                        name: $scope.newCategory
                    }).then(function (category) {
                        category.name = $scope.newCategory;
                        $scope.categories.push(category);
                        $scope.newCategory = '';
                    });
                };

                rbCategoryResource.getAll().then(function (categories) {
                    $scope.categories = categories.plain();
                });
            }
        };
    });
})();