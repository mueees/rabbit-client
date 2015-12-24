(function () {
    'use strict';
    angular.module('rb.login').controller('LoginController', function ($scope) {
        $scope.loginConfig = {
            name: 'Rabbit',
            description: 'Everything is simpler than you think',
            action: 'Go deep'
        };
    });
})();