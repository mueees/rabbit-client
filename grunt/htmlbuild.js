module.exports = function (grunt, config) {
    var path = require('path');

    return {
        debug: {
            src: '<%= src %>/index.html',
            dest: '<%= target %>',
            cwd: process.cwd(),
            options: {
                beautify: true,
                relative: false,
                prefix: '/',
                scripts: {
                    libs: vendor.debug.scripts,
                    globals: [],
                    main: ['<%= src %>/scripts/rb.module.js', '<%= src %>/scripts/rb.*.js'],
                    app: [
                        getScripts('<%= src %>/scripts'),
                        '!<%= src %>/scripts/rb.*.js'
                    ]
                },
                styles: {
                    libs: vendor.debug.css,
                    app: ['<%= target %>/resources/**/!(*.min).css']
                },
                data: {
                    // Data to pass to templates
                    version: '0.0.1',
                    enable_assert: true
                }
            }
        },
        release: {
            src: '<%= src %>/index.html',
            dest: '<%= target %>',
            options: {
                beautify: true,
                relative: true,
                scripts: {
                    libs: vendor.release.scripts,
                    globals: [],
                    main: ['<%= target %>/scripts/rabbit.min.js'],
                    app: []
                },
                styles: {
                    libs: vendor.release.css,
                    app: ['<%= target %>/resources/**/*.css']
                },
                data: {
                    // Data to pass to templates
                    version: "0.0.1",
                    enable_assert: false
                }
            }
        }
    };
};