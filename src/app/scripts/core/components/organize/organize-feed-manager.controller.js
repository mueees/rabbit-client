(function () {
    'use strict';

    angular.module('rb.core.components.organize').controller('rbOrganizeFeedManagerController', function ($q, $timeout, $scope, $modalInstance, data, rbCategoryResource) {
        $scope.feed = data.feed;
        $scope.categories = data.categories;

        $scope.newCategoryId = '';

        $scope.deleteFeed = function () {
            _.remove(data.category.feeds, {
                feedId: data.feed.feedId
            });

            rbCategoryResource.edit(data.category._id, {
                feeds: data.category.feeds
            }).then(function () {
                $modalInstance.close();
            });
        };

        $scope.canSave = function () {
            return $scope.OrganizeFeedManagerForm.$dirty;
        };

        $scope.save = function () {
            var promises = [];

            if ($scope.newCategoryId && $scope.newCategoryId != data.category._id) {
                var feed = _.remove(data.category.feeds, {
                        feedId: data.feed.feedId
                    })[0],
                    category = _.find($scope.categories, function (category) {
                        return category._id == $scope.newCategoryId;
                    });

                category.feeds.push(feed);

                promises.push(rbCategoryResource.edit(data.category._id, {
                        feeds: data.category.feeds
                    }),
                    rbCategoryResource.edit(category._id, {
                        feeds: category.feeds
                    }));

            } else {
                promises.push(rbCategoryResource.edit(data.category._id, {
                    feeds: data.category.feeds
                }));
            }

            $q.all(promises).then(function () {
                $modalInstance.close();
            });
        };

        $scope.close = function () {
            $modalInstance.dismiss('cancel');
        };
    });
})();