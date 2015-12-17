module.exports = function (grunt) {
    return {
        app: {
            path: 'http://' + grunt.option('host') + ':' + grunt.option('port') + '/app/index.html'
        }
    };
};