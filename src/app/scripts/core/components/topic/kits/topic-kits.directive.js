(function () {
    'use strict';

    angular.module('rb.core.components.topic').directive('rbTopicKits', function (rbTopicResource,
                                                                                  $state) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/core/components/topic/kits/topic-kits.directive.view.html',
            scope: {
                rbConfig: '='
            },
            link: function ($scope, element) {
                $scope.topics = [];

                rbTopicResource.getAll().then(function (topics) {
                    $scope.topics = topics;
                });

                $scope.topicHandler = function (topic) {
                    $state.go('app.topic', {topicId: topic._id});
                };
            }
        };
    });
})();