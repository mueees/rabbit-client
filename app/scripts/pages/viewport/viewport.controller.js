(function () {
    'use strict';
    angular.module('rb.viewport').controller('ViewportController', function ($scope, mueSession) {
        $scope.headerConfig = {
            name: 'Rabbit!',
            email: mueSession.getUser().email
        };
    });
})();