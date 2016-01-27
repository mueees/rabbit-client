(function () {
    'use strict';

    angular.module('rb.search', [
        'ui.router',
        'rb.core.resources',
        'rb.core.components.feed-card',
        'rb.core.components.popular-feeds',
        'rb.core.components.topic'
    ]);
})();