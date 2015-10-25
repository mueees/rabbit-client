(function () {
    'use strict';
    angular.module('rb.login').controller('LoginController', function ($scope) {
        $scope.loginConfig = {
            name: 'Rabbit',
            description: 'Rss for everyone',
            action: 'Login'
        };
    });
})();