module.exports = function (grunt, config) {
    var path = require('path');

    return {
        options: {},
        debug: {
            proxies: [
                {
                    context: '/api',
                    host: grunt.option('api-host'),
                    port: grunt.option('api-port'),
                    https: false,
                    changeOrigin: false
                },
                {
                    context: '/target/web-build/app/resources/img',
                    host: grunt.option('host'),
                    port: grunt.option('port'),
                    rewrite: {
                        '^/target/web-build/app/resources/img/(.*)$': '/<%= src %>/resources/img/$1'
                    }
                },
                {
                    context: '/app',
                    host: grunt.option('host'),
                    port: grunt.option('port'),
                    rewrite: {
                        '^/app/(index.html)$': '/<%= target %>/$1',
                        '^/app/(.*)$': '/<%= src %>/$1'
                    }
                },
                {
                    context: '/angular-components',
                    host: grunt.option('host'),
                    port: grunt.option('port'),
                    rewrite: {
                        '(.*)/mue-core-0.0.1/(.*)': '/$2'
                    }
                }
            ],
            options: {
                // change this to '0.0.0.0' to access the server from outside
                hostname: grunt.option('host'),
                port: grunt.option('port'),
                base: [process.cwd(), '<%= core %>'],
                middleware: function (connect, options, middlewares) {
                    return [
                        require('grunt-connect-proxy/lib/utils').proxyRequest,
                        require('connect-livereload')({port: grunt.option('livereload-port')})
                    ].concat(middlewares);
                }
            }
        },
        release: {
            proxies: [
                {
                    context: '/api',
                    host: grunt.option('api-host'),
                    port: grunt.option('api-port'),
                    https: false,
                    changeOrigin: false
                }
            ],
            options: {
                // change this to '0.0.0.0' to access the server from outside
                hostname: grunt.option('host'),
                port: grunt.option('port'),
                base: 'target/web-build',
                debug: true,
                keepalive: true,
                middleware: function (connect, options, middlewares) {
                    return [
                        require('grunt-connect-proxy/lib/utils').proxyRequest
                    ].concat(middlewares);
                }
            }
        }
    }
};