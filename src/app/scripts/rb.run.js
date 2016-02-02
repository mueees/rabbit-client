(function () {
    'use strict';
    angular.module('rb').run(function ($rootScope, $state, mueToken, mueSession, MUE_AUTH_EVENTS, mueAuthentication) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            if (toState.isLoginRequired !== false) {
                if (!mueToken.hasToken()) {
                    event.preventDefault();

                    $rootScope.$broadcast(MUE_AUTH_EVENTS.notAuthenticated);
                }
            }
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            // google analytics - update session
            ga('send', 'pageview', toState.name);
        });
    });
})();