(function () {
    'use strict';
    angular.module('rb.viewport').controller('ViewportController', function ($timeout, blade, $scope, categories, mueSession, mueAuthentication) {
        $scope.categories = categories;

        $scope.user = mueSession.getUser();

        $scope.logout = function () {
            mueAuthentication.logout();
        };
    });
})();