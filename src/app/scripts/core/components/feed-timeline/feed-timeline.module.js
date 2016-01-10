(function () {
    'use strict';

    angular.module('rb.core.components.feed-timeline', [
        'rb.core.components.post-list-item',
        'rb.core.components.post-magazine-item',
        'cfp.hotkeys',
        'mue.helpers',
        'angular-growl',
        'rb.core.components.blade',
        'rb.core.components.feed-icon'
    ]);
})();