(function () {
    'use strict';

    angular.module('rb.core.components.blade').constant('RB_BLADE', {
        events: {
            show: 'rb-blade-show',
            addTab: 'rb-blade-addTab',
            hide: 'rb-blade-hide',
            addOrUpdate: 'rb-blade-addOrUpdate'
        }
    });
})();