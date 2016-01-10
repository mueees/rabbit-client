(function () {
    'use strict';

    angular.module('rb').provider('rbConfig', function () {
        var config = {
            /*environment: 'production'*/
        };

        var developmentOrigin = 'http://localhost:10002',
            productionOrigin = 'http://proxy.mue.in.ua',

            developmentOauth = '04f3aa3f-626e-8e1a-4640-d698d8a3e313',
            productionOauth = '775e8458-587d-e1bb-6450-5b205b202303';

        function isProduction() {
            return config.environment == 'production';
        }

        function get(name) {
            return config[name];
        }

        function set(name, value) {
            config[name] = value;
        }

        function getConfig() {
            return config;
        }

        config.origin = isProduction() ? productionOrigin : developmentOrigin;
        config.oauthKey = isProduction() ? productionOauth : developmentOauth;

        return {
            isProduction: isProduction,
            getConfig: getConfig,
            get: get,
            set: set,
            $get: {
                isProduction: isProduction,
                getConfig: getConfig,
                get: get,
                set: set
            }
        };
    });
})();