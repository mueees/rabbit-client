var _ = require('lodash');

module.exports = function (grunt) {
    'use strict';

    var data = grunt.config.process(grunt.file.read(grunt.config.process('<%= src %>/resources/scss/init.scss')));

    return _.mapValues({
        debug: {
            options: {
                outputStyle: 'expanded'
            }
        },
        release: {
            options: {
                outputStyle: 'compressed'
            }
        }
    }, function (value) {
        return _.merge({
            options: {
                sourceMap: true,
                data: data
            },
            files: _.mapKeys({
                '<%= target %>/resources/css/rabbit.css': '<%= src %>/resources/scss/init.scss'
            }, function (value, key) {
                return grunt.config.process(key);
            })
        }, value);
    });
};