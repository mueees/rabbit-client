(function () {
    'use strict';

    angular.module('rb.viewport', [
        'ui.router',
        'mue.core.components.header',
        'mue.core.security',
        'mue.core.components.sidebar',
        'rb.core.feed',
        'rb.core.components.categories-feed',
        'rb.core.components.blade'
    ]);
})();