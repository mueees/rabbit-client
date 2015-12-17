module.exports = function (grunt) {
    return {
        options: {
            livereload: parseInt(grunt.option('livereload-port')),
            spawn: false
        },
        'sass': {
            options: {
                livereload: false,
                spawn: true
            },
            files: ['<%= src %>/resources/scss/**/*.scss', '<%= core %>/resources/scss/**/*.scss'],
            tasks: ['sass:debug']
        },
        'scripts-app': {
            files: '<%= src %>/scripts/**/*.js',
            tasks: ['validation-wrapper', 'tests-wrapper', 'preprocess:app', 'htmlbuild:debug']
        },
        'scripts-vendor': {
            files: vendor.debug.scripts,
            tasks: ['preprocess:app', 'htmlbuild:debug']
        },
        index: {
            files: '<%= target %>/index.html'
        },
        css: {
            files: '<%= target %>/resources/**/*.css'
        }
    };
};