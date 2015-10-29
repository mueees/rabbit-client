(function () {
    'use strict';
    angular.module('rb.core.resources').factory('rbPostResource', function ($q, MueResource) {
        var path = 'rabbit/posts',
            Post = MueResource.withConfig(function (RestangularConfigurer) {

            });

        return {
            find: function (options) {
                return Post.all(path).getList(_.pick(options,
                    ['feedId', 'readLater', 'limit', 'skip']
                ));
            },

            read: function (postId) {
                return Post.all(path + '/' + postId + '/read').post({});
            },

            unread: function (postId) {
                return Post.all(path + '/' + postId + '/unread').post({});
            }
        };
    });
})();