(function () {
    'use strict';
    angular.module('rb').config(function (rbConfigProvider,
                                          MueResourceProvider,
                                          $urlRouterProvider,
                                          mueAuthUserResourceProvider,
                                          mueAuthenticationProvider) {

        $urlRouterProvider.otherwise("app/main");

        mueAuthUserResourceProvider.setOauthKey(rbConfigProvider.get('oauthKey'));

        mueAuthUserResourceProvider.config({
            origin: rbConfigProvider.get('origin')
        });

        MueResourceProvider.setBaseUrl(rbConfigProvider.get('origin') + '/api');

        mueAuthenticationProvider.loginState('login');
        mueAuthenticationProvider.appState('app.main');
    });
})();