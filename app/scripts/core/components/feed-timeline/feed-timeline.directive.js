(function () {
    'use strict';

    angular.module('rb.core.components.feed-timeline').directive('rbFeedTimeline', function (growl, hotkeys, RB, $q, rbPostResource, rbFeedResource, RB_FEED_TIMELINE) {
        return {
            restrict: 'E',
            templateUrl: 'app/scripts/core/components/feed-timeline/feed-timeline.directive.view.html',
            scope: {
                rbConfig: '='
            },
            link: function ($scope, element) {
                var options = {
                    limit: 20,
                    skip: 0
                },
                    canLoad = true;

                $scope.posts = [];

                if (!localStorage.getItem(RB.storage.typePostView)) {
                    localStorage.setItem(RB.storage.typePostView, 'list');
                }

                $scope.viewType = localStorage.getItem(RB.storage.typePostView);

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

                $scope.loadPosts = function () {
                    canLoad = false;

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

                        canLoad = true;
                    }, function () {
                        canLoad = true;
                    });
                };

                $scope.$on('rb:post:showFull', function (event, post) {
                    openPost(post);
                });

                hotkeys.bindTo($scope)
                    .add({
                        combo: 'right',
                        callback: rightPressHandler
                    })
                    .add({
                        combo: 'left',
                        callback: leftPressHandler
                    });

                function openPost(post) {
                    rbPostResource.read(post._id);

                    _.forEach($scope.posts, function (currentPost) {
                        currentPost.open = false;
                        currentPost.scroll = false;
                    });

                    post.user.isRead = true;
                    post.open = true;
                    post.scroll = true;
                }

                function canLoadPosts(){
                    return canLoad;
                }

                function getNextPost(direction) {
                    var openedPost = _.find($scope.posts, {
                            open: true
                        }),
                        post;

                    if (!direction) {
                        direction = 'right';
                    }

                    if (!openedPost) {
                        post = $scope.posts[0];
                    } else {
                        var index = _.findIndex($scope.posts, function (post) {
                            return post._id == openedPost._id;
                        });

                        if (direction == 'left') {
                            if ($scope.posts[index - 1]) {
                                post = $scope.posts[index - 1];
                            }
                        } else if (direction == 'right') {
                            if ($scope.posts[index + 1]) {
                                post = $scope.posts[index + 1];
                            } else {
                                if (!$scope.noPosts && $scope.canLoadPosts()) {
                                    loadPosts().then(function () {
                                        if ($scope.posts[index + 1]) {
                                            return $scope.posts[index + 1];
                                        }
                                    });
                                }
                            }
                        }
                    }

                    return post;
                }

                function rightPressHandler() {
                    if ($scope.viewType == 'list' && $scope.posts.length) {
                        var nextPost = getNextPost('right');

                        if (nextPost) {
                            openPost(nextPost);
                        }
                    }
                }

                function leftPressHandler() {
                    if ($scope.viewType == 'list' && $scope.posts.length) {
                        var nextPost = getNextPost('left');

                        if (nextPost) {
                            openPost(nextPost);
                        }
                    }
                }

                init();
            }
        };
    });
})();