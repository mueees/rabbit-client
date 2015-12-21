(function () {
    'use strict';
    angular.module('rb').config(function (rbConfigProvider,
                                          MueResourceProvider,
                                          $urlRouterProvider,
                                          mueAuthProxyProvider,
                                          mueAuthenticationProvider) {

        $urlRouterProvider.otherwise("app/main");

        mueAuthProxyProvider.setOauthKey(rbConfigProvider.get('oauthKey'));

        mueAuthProxyProvider.config({
            origin: rbConfigProvider.get('origin')
        });

        MueResourceProvider.setBaseUrl(rbConfigProvider.get('origin') + '/api');

        mueAuthenticationProvider.loginState('login');
        mueAuthenticationProvider.appState('app.main');
    });
})();