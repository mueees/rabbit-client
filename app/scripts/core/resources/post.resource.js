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
            }
        };
    });
})();