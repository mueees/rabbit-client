(function () {
    'use strict';
    angular.module('rb.core.resources').factory('rbCategoryResource', function ($q, MueResource) {
        var path = 'rabbit/categories',
            Category = MueResource.withConfig(function (RestangularConfigurer) {

            });

        return {
            create: function (data) {
                var category = Category.one(path);

                _.assign(category, data);

                return category.put();
            },
            getAll: function () {
                return Category.all(path).getList();
            }
        };
    });
})();