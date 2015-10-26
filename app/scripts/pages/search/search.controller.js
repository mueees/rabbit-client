(function () {
    'use strict';
    angular.module('rb.search').controller('SearchController', function ($scope) {
        $scope.search = {
            query: ''
        };

        $scope.$watch('search.query', function (newValue, oldValue) {
            if(newValue && newValue != oldValue){

            }
        });
    });
})();