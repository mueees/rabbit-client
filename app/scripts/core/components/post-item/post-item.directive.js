(function () {
    'use strict';

    angular.module('rb.core.components.post-item').directive('rbPostItem', function ($timeout) {
        return {
            restrict: 'E',
            templateUrl: 'app/scripts/core/components/post-item/post-item.directive.view.html',
            replace: true,
            scope: {
                rbConfig: '='
            },
            link: function ($scope, element) {
                $timeout(function () {
                    var images = element[0].querySelectorAll('.rb-post-item-body img');

                    $scope.showTitleImage = !_.find(images, function (img) {
                        var imgName = img.src.match(/.+\/(.+)\..+$/)[1],
                            patt = new RegExp(imgName);

                        return patt.test($scope.rbConfig.title_image);
                    });
                });
            }
        };
    });
})();