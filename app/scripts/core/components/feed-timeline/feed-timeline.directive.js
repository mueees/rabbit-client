(function () {
    'use strict';

    angular.module('rb.core.components.feed-timeline').directive('rbFeedTimeline', function (RB, $q, rbPostResource, rbFeedResource, RB_FEED_TIMELINE) {
        return {
            restrict: 'E',
            templateUrl: 'app/scripts/core/components/feed-timeline/feed-timeline.directive.view.html',
            scope: {
                rbConfig: '='
            },
            link: function ($scope, element) {
                $scope.posts = [];

                if (!localStorage.getItem(RB.storage.typePostView)) {
                    localStorage.setItem(RB.storage.typePostView, 'list');
                }

                $scope.viewType = localStorage.getItem(RB.storage.typePostView);

                var options = {
                    limit: 20,
                    skip: 0
                };

                function init() {
                    var def = $q.defer();

                    var feedPromise = rbFeedResource.get($scope.rbConfig.feedId),
                        postPromise = rbPostResource.find({
                            feedId: $scope.rbConfig.feedId,
                            limit: options.limit,
                            skip: options.skip
                        });

                    $q.all([
                        feedPromise,
                        postPromise
                    ]).then(function (resluts) {
                        $scope.feed = resluts[0];
                        $scope.posts = resluts[1];

                        options.skip += options.limit;

                        def.resolve();
                    }, function () {
                        def.reject();
                    });

                    return def.promise;
                }

                init();

                $scope.setViewType = function (type) {
                    if (RB_FEED_TIMELINE.viewTypes[type]) {
                        $scope.viewType = type;

                        localStorage.setItem(RB.storage.typePostView, type);
                    }
                };

                $scope.readPosts = function () {
                    _.forEach($scope.posts, function (post) {
                        post.user.isRead = true;
                    });

                    rbPostResource.readPosts(_.pluck($scope.posts, '_id'));
                };

                $scope.unreadPosts = function () {
                    _.forEach($scope.posts, function (post) {
                        post.user.isRead = false;
                    });

                    rbPostResource.unreadPosts(_.pluck($scope.posts, '_id'));
                };

                $scope.$on('rb:post:showFull', function (event, post) {
                    _.forEach($scope.posts, function (currentPost) {
                        if (currentPost._id != post._id) {
                            currentPost.open = false;
                        }
                    });
                });

                $scope.loadPosts = function () {
                    rbPostResource.find({
                        feedId: $scope.rbConfig.feedId,
                        limit: options.limit,
                        skip: options.skip
                    }).then(function (posts) {
                        posts = posts.plain();

                        if (posts.length) {
                            $scope.posts = $scope.posts.concat(posts);
                            options.skip += options.limit;
                        } else {
                            $scope.noPosts = true;
                        }
                    });
                };
            }
        };
    });
})();