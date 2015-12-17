(function () {
    'use strict';

    angular.module('rb', [
        'ui.router',
        'ui.bootstrap',
        'angular-loading-bar',

        'mue.helpers',
        'mue.core.error-handler',

        /*pages*/
        'rb.main',
        'rb.feed',
        'rb.organize',
        'rb.search',
        'rb.login'
    ]);
})();