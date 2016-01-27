(function () {
    'use strict';
    angular.module('rb.search').controller('TopicController', function ($scope, $stateParams, topics, feeds) {
        $scope.topic = _.find(topics, {
            _id: $stateParams.topicId
        });

        $scope.relatedTopics = _.map($scope.topic.related_topics, function (relatedTopicId) {
            return _.find(topics, {
                _id: relatedTopicId
            });
        });

        $scope.feeds = feeds;
    });
})();