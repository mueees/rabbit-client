module.exports = {
    app: {
        options: {
            sourceMap: '<%= target %>/scripts/rabbit.min.map.js'
        },
        src: '<%= concat.release.dest %>',
        dest: '<%= target %>/scripts/rabbit.min.js'
    }
};