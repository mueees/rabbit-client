module.exports = {
    app: {
        cwd: '<%= src %>',
        src: ['scripts/**/*.html'],
        dest: '<%= concat.release.dest %>',
        options: {
            htmlmin: {
                collapseWhitespace: true,
                collapseBooleanAttributes: true
            },
            module: 'rb',
            append: true,
            bootstrap: function(module, script) {
                return [
                    '(function () {',
                    '  angular.module(\'' + module + '\').run([\'$templateCache\', function($templateCache) {',
                    script,
                    '  }]);',
                    '})();'].join('\n');
            }
        }
    }
};