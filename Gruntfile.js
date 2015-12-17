module.exports = function (grunt) {
    'use strict';

    // Set configuration
    (function (grunt) {
        var defaultOptions = {
            'livereload-port': '39001',
            'api-host': 'localhost',
            'api-port': '8008',
            'host': 'localhost',
            'port': '9001',
            'skip-tests': ''
        };

        for (var optionName in defaultOptions) {
            var defaultValue = defaultOptions[optionName],
            // cmd --api-host -> env RX_API_HOST
                envName = 'MUE_RABBIT_' + optionName.toUpperCase().replace(/-/g, '_'),
                value = process.env[envName];

            // command-line option || environment variable || default
            if (grunt.option(optionName) === undefined) {
                grunt.option(optionName, value !== undefined ? value : defaultValue);
            }
        }
    })(grunt);

    var _ = require('lodash'),
        path = require('path');

    var config = require('./package.json').config;
    _.forEach(config, function (value, key) {
        grunt.config(key, value);
    });

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    global.getScripts = require(grunt.config.process('<%= dependencies %>/get-scripts'));

    // Vendor code
    global.vendor = grunt.config.process(grunt.file.readJSON('vendors.list.json'));

    grunt.registerTask('validation-wrapper', function () {
        if (!grunt.option('skip-validation')) {
            grunt.task.run(['jshint', 'jsvalidate']);
        } else {
            grunt.log.warn('Skipping validation'.toUpperCase());
        }
    });

    grunt.registerTask('tests-wrapper', function () {
        if (!grunt.option('skip-tests')) {
            grunt.task.run('karma');
        } else {
            grunt.log.warn('Skipping tests'.toUpperCase());
        }
    });

    // Register all the tasks that can be executed on the command line
    // todo: implement
    grunt.registerTask('server-debug', [
        'configureProxies:debug',
        'connect:debug',
        'open'
    ]);

    // todo: implement
    grunt.registerTask('server-release', [
        'configureProxies:release',
        'connect:release',
        'open'
    ]);

    grunt.registerTask('debug', 'Main task for development', [
        'validation-wrapper',
        'sass:debug',
        'tests-wrapper',
        'preprocess',
        'htmlbuild:debug',
        'server-debug',
        'watch'
    ]);

    grunt.registerTask('dev', 'Fastest development task skips tests, jshint and js validation', function () {
        grunt.option('skip-tests', 0);
        grunt.option('skip-validation', 1);
        grunt.task.run('debug');
    });

    grunt.registerTask('default', ['dev']);

    grunt.registerTask('release', 'Main task for production, to create minified app', [
        'validation-wrapper',
        'tests-wrapper',
        'clean:all',
        'sass:release',
        'copy',
        'concat:release',
        'ngAnnotate',
        'ngtemplates',
        'uglify',
        'preprocess',
        'htmlbuild:release'
    ]);

    // Load all tasks
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt'),
        mergeFunction: require('recursive-merge'),
        data: config,
        loadGruntTasks: {
            pattern: ['grunt-*'],
            config: require('./package.json'),
            scope: 'devDependencies'
        }
    });
};