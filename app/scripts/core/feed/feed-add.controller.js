(function () {
    'use strict';

    angular.module('rb.core.feed').controller('rbFeedAddController', function ($scope, $modalInstance, data, rbFeedResource) {
        $scope.feed = data.feed;

        $scope.follow = function () {
            rbFeedResource.follow($scope.feed._id, $scope.rbCategoryList.category._id).then(function () {
                $modalInstance.close();
            });
        };

        $scope.canFollow = function () {
            return false;
        };

        $scope.rbCategoryList = {
            category: ''
        };

        $scope.close = function () {
            $modalInstance.dismiss('cancel');
        };
    });
})();