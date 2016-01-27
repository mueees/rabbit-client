(function () {
    'use strict';
    angular.module('rb').config(function (rbConfigProvider,
                                          MueResourceProvider,
                                          $urlRouterProvider,
                                          mueAuthProxyProvider,
                                          $httpProvider,
                                          mueAuthenticationProvider) {

        $urlRouterProvider.otherwise("app/search");

        mueAuthProxyProvider.setOauthKey(rbConfigProvider.get('oauthKey'));

        mueAuthProxyProvider.config({
            origin: rbConfigProvider.get('origin')
        });

        $httpProvider.interceptors.push('mueHttpResponseErrorInterceptor');

        MueResourceProvider.setBaseUrl(rbConfigProvider.get('origin') + '/api');

        mueAuthenticationProvider.loginState('login');
        mueAuthenticationProvider.appState('app.search');
    });
})();