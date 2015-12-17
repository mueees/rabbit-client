var path = require('path');

module.exports = function (grunt) {
    return {
        all: path.normalize(grunt.config.process('<%= target %>/..'))
    }
};