(function () {
    'use strict';

    angular.module('rb.core.components.post-list-item').directive('rbPostListItem', function ($timeout,
                                                                                              rbPostResource,
                                                                                              relativeDate) {
        return {
            restrict: 'E',
            templateUrl: 'app/scripts/core/components/post-list-item/post-list-item.directive.view.html',
            replace: true,
            scope: {
                rbConfig: '='
            },
            link: function ($scope, element) {
                $scope.open = false;

                relativeDate.set(new Date($scope.rbConfig.public_date), function (date) {
                    $scope.public_date = date;
                });

                $scope.showFullPost = function () {
                    $scope.$emit('rb:post:showFull', $scope.rbConfig);
                    $timeout(function () {
                        isShowTitleImg();
                    });
                };

                $scope.unread = function () {
                    rbPostResource.unread($scope.rbConfig._id);

                    $scope.rbConfig.user.isRead = false;

                    $scope.showDescriptionPost();
                };

                $scope.showDescriptionPost = function () {
                    $scope.rbConfig.open = false;
                };

                function isShowTitleImg(){
                    $scope.showTitleImage = !element[0].querySelectorAll('.rb-post-list-item-body img').length;
                }

                $scope.$watch('rbConfig.scroll', function (newValue, oldValue) {
                    if (newValue != oldValue && newValue) {
                        window.scrollTo(0, element[0].offsetTop);
                    }
                });
            }
        };
    });
})();