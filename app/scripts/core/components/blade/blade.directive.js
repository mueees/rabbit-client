(function () {
    'use strict';

    angular.module('rb.core.components.blade').directive('rbBlade', function ($timeout, $rootScope, RB_BLADE, mueHelpers, hotkeys) {
        return {
            restrict: 'E',
            templateUrl: 'app/scripts/core/components/blade/blade.directive.view.html',
            scope: true,
            link: function ($scope) {
                $scope.tabs = [];

                $scope.isOpen = false;

                function show() {
                    $scope.isOpen = true;
                }

                function hide() {
                    $scope.isOpen = false;

                    $scope.tabs = [];
                }

                function addTab(event, tab) {
                    show();

                    tab.id = tab.id || mueHelpers.guid();
                    $scope.tabs.push(tab);
                }

                function addOrUpdate(event, tab) {
                    show();

                    tab.id = tab.id || mueHelpers.guid();

                    var savedTab = _.find($scope.tabs, {
                        id: tab.id
                    });

                    if (savedTab) {
                        $timeout(function () {
                            savedTab.data = tab.data;
                        });
                    } else {
                        $scope.tabs.push(tab);
                    }
                }

                $scope.closeTab = function (tab) {
                    if ($scope.tabs.length == 1) {
                        hide();
                    }

                    _.remove($scope.tabs, {
                        id: tab.id
                    });
                };

                hotkeys.bindTo($scope)
                    .add({
                        combo: 'escape',
                        callback: hide
                    });

                $scope.hide = hide;

                $rootScope.$on(RB_BLADE.events.addOrUpdate, addOrUpdate);
                $rootScope.$on(RB_BLADE.events.addTab, addTab);
                $rootScope.$on(RB_BLADE.events.show, show);
                $rootScope.$on(RB_BLADE.events.hide, hide);
            }
        };
    });
})();