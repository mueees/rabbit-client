(function () {
    'use strict';
    angular.module('rb.feed').controller('FeedController', function ($scope, $stateParams) {
        console.log($stateParams.id);
    });
})();