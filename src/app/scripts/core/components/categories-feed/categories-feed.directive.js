(function () {
    'use strict';

    angular.module('rb.core.components.categories-feed').directive('rbCategoriesFeed', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/core/components/categories-feed/categories-feed.directive.view.html',
            scope: {
                rbConfig: '='
            },
            link: function ($scope, element) {
                function getCategory(category) {
                    var cat = _.find($scope.rbConfig.categories, {
                        _id: category._id
                    });

                    if (!cat) {
                        cat = {
                            _id: category._id,
                            feeds: [],
                            name: category.name
                        };

                        $scope.rbConfig.categories.push(cat);
                    }

                    return cat;
                }

                $scope.$on('rb:feed:followed', function (event, data) {
                    var category = getCategory(data.category),
                        feed = {
                            feedId: data.feed._id,
                            name: data.feed.title,
                            domain: data.feed.domain
                        };

                    category.open = true;

                    category.feeds.push(feed);
                });

                $scope.$on('rb:feed:unfollowed', function (event, data) {
                    var category = getCategory(data.category);

                    _.remove(category.feeds, {
                        feedId: data.feed.feedId
                    });
                });

                $scope.$on('rb:category:removed', function (event, data) {
                    _.remove($scope.rbConfig.categories, {
                        _id: data.category._id
                    });
                });
            }
        };
    });
})();