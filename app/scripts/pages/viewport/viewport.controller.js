(function () {
    'use strict';
    angular.module('rb.viewport').controller('ViewportController', function ($scope, categories) {
        $scope.categories = categories;
    });
})();