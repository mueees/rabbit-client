(function () {
    'use strict';

    angular.module('rb.core.components.topic').directive('rbTopicsRelatedList', function ($state) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/core/components/topic/related-list/topic-related-list.directive.view.html',
            scope: {
                relatedTopics: '='
            },
            link: function ($scope) {
                $scope.topicHandler = function (topic) {
                    $state.go('app.topic', {topicId: topic._id});
                };
            }
        };
    });
})();