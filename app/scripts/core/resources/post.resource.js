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

            readPosts: function (postIds) {
                return Post.all(path + '/read').post({
                    ids: postIds
                });
            },

            unreadPosts: function (postIds) {
                return Post.all(path + '/unread').post({
                    ids: postIds
                });
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