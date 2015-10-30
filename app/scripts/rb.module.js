(function () {
    'use strict';

    angular.module('rb', [
        'rb.templates',
        'ui.router',
        'ui.bootstrap',
        'angular-loading-bar',

        'mue.core.error-handler',

        /*pages*/
        'rb.main',
        'rb.feed',
        'rb.search',
        'rb.login'
    ]);
})();