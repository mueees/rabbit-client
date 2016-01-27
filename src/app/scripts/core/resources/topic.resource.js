(function () {
    'use strict';
    angular.module('rb.core.resources').factory('rbTopicResource', function ($q, MueResource) {
        var path = 'rabbit/topics',
            Topic = MueResource.withConfig(function (RestangularConfigurer) {

            });

        return {
            getAll: function () {
                return Topic.all(path).getList();
            },

            get: function (topicId) {
                return Topic.one(path + '/' + topicId).get();
            }
        };
    });
})();