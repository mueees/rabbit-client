module.exports = function () {
    'use strict';

    return {
        options: {
            globals: {},
            esprimaOptions: {},
            verbose: false
        },
        targetName: {
            files: {
                src: '<%= src %>/scripts/**/*.js'
            }
        }
    };
};