(function () {
    'use strict';
    angular.module('rb.viewport').controller('ViewportController', function ($timeout, blade, $scope, categories, mueSession, mueAuthProxy) {
        $scope.categories = categories;

        $scope.user = mueSession.getUser();

        $scope.logout = function () {
            mueAuthProxy.logout();
        };
    });
})();