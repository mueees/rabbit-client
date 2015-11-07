(function () {
    'use strict';

    angular.module('rb.core.components.blade').provider('blade', function () {
        return {
            $get: function ($rootScope, RB_BLADE) {

                // show blade
                function show() {
                    $rootScope.$broadcast(RB_BLADE.events.show);
                }

                // hide blade
                function hide() {
                    $rootScope.$broadcast(RB_BLADE.events.hide);
                }

                // close all opened tabs
                function closeAllTabs() {

                }

                // show particular tab
                function showTab() {
                }

                // add one another tab
                function addTab(tab) {
                    $rootScope.$broadcast(RB_BLADE.events.addTab, tab);
                }

                function addOrUpdate(tab) {
                    $rootScope.$broadcast(RB_BLADE.events.addOrUpdate, tab);
                }

                return {
                    hide: hide,
                    show: show,
                    showTab: showTab,
                    closeAllTabs: closeAllTabs,
                    addTab: addTab,
                    addOrUpdate: addOrUpdate
                };
            }
        };
    });
})();