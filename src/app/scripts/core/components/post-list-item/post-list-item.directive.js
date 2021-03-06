(function () {
    'use strict';

    angular.module('rb.core.components.post-list-item').directive('rbPostListItem', function ($timeout,
                                                                                              $rootScope,
                                                                                              rbPostResource,
                                                                                              relativeDate) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/core/components/post-list-item/post-list-item.directive.view.html',
            replace: true,
            scope: {
                rbConfig: '='
            },
            link: function ($scope, element) {
                relativeDate.set(new Date($scope.rbConfig.post.public_date), function (date) {
                    $scope.public_date = date;
                });

                $scope.showFullPost = function () {
                    $scope.$emit('rb:post:showFull', $scope.rbConfig.post);

                    $timeout(function () {
                        isShowTitleImg();
                    });
                };

                $scope.unread = function () {
                    rbPostResource.unread($scope.rbConfig.post._id);

                    $scope.rbConfig.post.user.isRead = false;

                    $scope.showDescriptionPost();
                };

                $scope.showDescriptionPost = function () {
                    $scope.rbConfig.post.open = false;
                };

                function isShowTitleImg() {
                    var images = element[0].querySelectorAll('.rb-post-list-item-full img');

                    $scope.showTitleImage = !_.find(images, function (img) {
                        var result;

                        if (img.src) {
                            var imgName = img.src.match(/.+\/(.+)\..+$/)[1],
                                patt = new RegExp(imgName);

                            result = patt.test($scope.rbConfig.post.title_image);
                        }

                        return result;
                    });
                }

                $scope.follow = function () {
                    $rootScope.$broadcast('rb:follow:feed', $scope.rbConfig.feed);
                };

                $scope.$watch('rbConfig.post.scroll', function (newValue, oldValue) {
                    if (newValue != oldValue && newValue) {
                        window.scrollTo(0, element[0].offsetTop);
                    }
                });
            }
        };
    });
})();