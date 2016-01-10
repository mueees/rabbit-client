(function () {
    'use strict';
    angular.module('rb.viewport').controller('ViewportController', function ($state,
                                                                             $timeout,
                                                                             blade,
                                                                             $scope,
                                                                             categories,
                                                                             mueSession,
                                                                             rbFeedManager,
                                                                             mueAuthProxy) {
        $scope.categoriesConfig = {
            categories: categories
        };

        $scope.user = mueSession.getUser();

        $scope.addContentHadler = function () {
            $state.go('app.search');
        };

        $scope.logout = function () {
            mueAuthProxy.logout();
        };

        var cleanListener = $scope.$on('rb:follow:feed', function (event, feed) {
            rbFeedManager.addFeed(feed);
        });

        $scope.$on('$destroy', function () {
            cleanListener();
        });
    });
})();