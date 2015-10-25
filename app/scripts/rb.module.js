(function () {
    'use strict';

    angular.module('rb', [
        'rb.templates',
        'ui.router',
        'ui.bootstrap',

        'mue.core.error-handler',

        /*pages*/
        'rb.main',
        'rb.login'
    ]);
})();