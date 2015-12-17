module.exports = function (grunt, config) {
    var path = require('path');

    return {
        app: {
            expand: true,
            flatten: false,
            cwd: '<%= src %>',
            src: [
                'resources/**'
            ],
            dest: '<%= target %>'
        },
        vendor: {
            expand: true,
            flatten: false,
            cwd: '<%= src %>',
            src: [].concat(vendor.release.scripts, vendor.release.resources, vendor.release.css).map(function (file) {
                return path.relative(config.target, file);
            }),
            dest: '<%= target %>'
        }
    };
};