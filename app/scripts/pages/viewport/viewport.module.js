(function () {
    'use strict';

    angular.module('rb.viewport', [
        'ui.router',
        'mue.core.security',
        'mue.core.components.header',
        'mue.core.security',
        'mue.core.components.sidebar',
        'rb.core.components.category-feeds',
        'rb.core.components.blade'
    ]);
})();