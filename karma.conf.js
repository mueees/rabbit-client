module.exports = function (karmaConfig) {
    var _ = require('lodash'),
        path = require('path'),
        config = require('./package.json').config,
        grunt = require('grunt');

    _.forEach(config, function (value, key) {
        grunt.config(key, value);
    });

    var getScripts = require(grunt.config.process('<%= dependencies %>/get-scripts'));

    var phantomjs2 = !_.every(process.argv, function (value) {
        return !/^--phantomjs2($|=)/.test(value);
    });

    // Vendor code
    var vendor = grunt.config.process(grunt.file.readJSON('vendors.list.json'));

    var allFiles = [].concat(
        vendor.debug.scripts,
        vendor.test.scripts,
        getScripts('<%= src %>/scripts'),
        '<%= src %>/scripts/**/*.test.js',
        '<%= src %>/scripts/**/*.html',
        vendor.test.css,
        [{
            pattern: '<%= src %>/**/*.jpg',
            included: false,
            served: true
        }]
    );

    karmaConfig.set(grunt.config.process({
        files: allFiles,

        preprocessors: _.mapKeys({
            '<%= src %>/scripts/**/!(*.test).js': ['coverage'],
            '<%= src %>/scripts/**/*.html': ['ng-html2js']
        }, function (value, key) {
            return grunt.config.process(key);
        }),

        proxies:  {
            '/vendor/rx-core-0.0.1/': '/<%= standardlib %>/',
            '/vendor/': '/base/<%= src %>/vendor/'
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: '<%= src %>/',
            moduleName: 'templates'
        },

        frameworks: ['jasmine'],

        plugins: [
            'karma-jasmine',
            'karma-firefox-launcher',
            'karma-chrome-launcher',
            'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-phantomjs2-launcher',
            'karma-ng-html2js-preprocessor'
        ],

        logLevel: 'ERROR',

        reporters: [
            'dots',
            'coverage'
        ],

        coverageReporter: {
            type: 'html',
            dir: 'target/coverage/'
        },

        port: 9090,
        urlRoot: '/',
        autoWatch: false,
        browsers: [phantomjs2 ? 'PhantomJS2' : 'PhantomJS'],

        captureTimeout: 60000,
        browserDisconnectTimeout: 10000,
        browserDisconnectTolerance: 1,
        browserNoActivityTimeout: 60000,

        singleRun: true,
        background: false
    }));
};