(function () {
    'use strict';

    angular.module('rb.core.components.organize').controller('rbOrganizeCategoryManagerController', function ($q, $timeout, $scope, $modalInstance, data, rbCategoryResource) {
        $scope.category = data.category;
        $scope.categories = data.categories;

        $scope.deleteCategory = function () {
            rbCategoryResource.deleteCategory(data.category._id).then(function () {
                _.remove($scope.categories, {
                    _id: $scope.category._id
                });

                $modalInstance.close();
            });
        };

        $scope.save = function () {
            rbCategoryResource.edit(data.category._id, {
                name: $scope.category.name
            }).then(function () {
                $modalInstance.close();
            });
        };

        $scope.close = function () {
            $modalInstance.dismiss('cancel');
        };
    });
})();