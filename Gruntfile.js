module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Uses to change the root name oldPrefix of a long folder name to newPrefix
    var changeRootFolder = function (names, oldPrefix, newPrefix) {
        var newNames = [];
        if (names) {
            if (typeof names === 'string') {
                names = [names];
            }

            for (var loop = 0; loop < names.length; loop++) {
                newNames.push(changePrefix(names[loop], oldPrefix, newPrefix));
            }
        }

        return newNames;
    };
    // Changes the prefix on the name by remove oldPrefix and replacing it with newPrefix
    var changePrefix = function (name, oldPrefix, newPrefix) {
        if (name && name.length && oldPrefix && oldPrefix.length && newPrefix && newPrefix.length) {
            if (name.indexOf(oldPrefix) === 1 && name[0] === '!') {
                return ('!' + newPrefix + name.substr(oldPrefix.length + 1));
            } else if (name.indexOf(oldPrefix) === 0) {
                return (newPrefix + name.substr(oldPrefix.length));
            }
        }

        return name;
    };

    var userConfig = require('./build.config.js');

    var taskConfig = {
        pkg: grunt.file.readJSON("package.json"),
        html2js: {
            dev: {
                options: {
                    base: '.',
                    module: 'rb.templates'
                },
                src: ['<%= app_files.js.templates %>'],
                dest: '<%= build_dir %>/app/scripts/rb.templates.js'
            }
        },
        copy: {
            app_assets: {
                files: [
                    {
                        src: ['**'],
                        dest: '<%= build_dir %>/app/assets',
                        cwd: 'app/assets',
                        expand: true,
                        flatten: false
                    }
                ]
            },
            app_js: {
                files: [
                    {
                        src: [
                            '<%= app_files.js.all %>'
                        ],
                        dest: '<%= build_dir %>/',
                        cwd: '.',
                        expand: true
                    }
                ]
            },

            //vendor
            vendor_js: {
                files: [
                    {
                        src: ['<%= vendor_files.js %>'],
                        dest: '<%= build_dir %>/',
                        cwd: '.',
                        expand: true
                    }
                ]
            },
            vendor_css: {
                files: [
                    {
                        src: ['<%= vendor_files.css %>'],
                        dest: '<%= build_dir %>/app/assets/css/vendor',
                        cwd: '.',
                        expand: true,
                        flatten: true
                    }
                ]
            },
            vendor_fonts: {
                files: [
                    {
                        src: ['<%= vendor_files.fonts %>'],
                        dest: '<%= build_dir %>/app/assets/fonts',
                        cwd: '.',
                        expand: true,
                        flatten: true
                    }
                ]
            }
        },
        clean: {
            build: [
                '<%= build_dir %>'
            ],
            assets_build: [
                '<%= build_dir %>/app/assets'
            ]
        },
        jshint: {
            src: [
                '<%= app_files.js.app %>'
            ],
            test: [
                '<%= app_files.js.jsunit %>'
            ],
            gruntfile: [
                'Gruntfile.js'
            ],
            options: {
                curly: true,
                immed: true,
                newcap: false,
                noarg: true,
                sub: true,
                boss: true,
                eqnull: true,
                debug: true,
                validthis: true,
                regexp: false
            },
            globals: {}
        },
        jsvalidate: {
            options: {
                globals: {},
                esprimaOptions: {},
                verbose: false
            },
            targetName: {
                files: {
                    src: ['<%=app_files.js.app%>']
                }
            }
        },
        htmlbuild: {
            dev: {
                src: 'app/index.html',
                dest: '<%= build_dir %>/app',
                options: {
                    beautify: true,
                    prefix: '.',
                    relative: true,
                    scripts: {
                        libs: changeRootFolder(userConfig.vendor_files.js, 'app/', '<%= build_dir %>/app/'),
                        templates: '<%= build_dir %>/app/scripts/rb.templates.js',
                        app: changeRootFolder(userConfig.app_files.js.app, 'app/scripts', '<%= build_dir %>/app/scripts')
                    },
                    styles: {
                        vendor: '<%= build_dir %>/app/assets/css/vendor/*.css',
                        app: '<%= build_dir %>/app/assets/css/*.css'
                    }
                }
            }
        },
        watch: {
            app_js: {
                files: [
                    '<%= app_files.js.app %>',
                    '<%= app_files.js.main %>'
                ],
                tasks: ['jshint:src', 'copy:app_js']
            },
            jsunit: {
                files: [
                    '<%= app_files.js.jsunit %>'
                ],
                tasks: ['karma']
            },
            assets: {
                files: ['app/assets/**'],
                tasks: ['clean:assets_build', 'copy:app_assets', 'copy:vendor_css', 'copy:vendor_fonts', 'htmlbuild:dev']
            },
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: ['jshint:gruntfile'],
                options: {
                    livereload: false
                }
            },
            html: {
                files: ['<%= app_files.html %>'],
                tasks: ['htmlbuild:dev']
            },
            tpls: {
                files: [
                    '<%= app_files.js.templates %>'
                ],
                tasks: ['html2js:dev']
            },
            sass: {
                files: [
                    '<%= app_files.sasses %>'
                ],
                tasks: ['clean:assets_build', 'sass:dev']
            },
            components: {
                files: '<%= vendor_files.components %>',
                tasks: ['clean:assets_build', 'copy:vendor_js', 'sass:dev']
            }
        },
        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    '<%= build_dir %>/app/assets/css/styles-<%= pkg.version %>.css': '<%= app_files.sass %>'
                }
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            dev: {
                files: [
                    {
                        expand: true,
                        flatten: false,
                        cwd: '.',
                        src: '<%= build_dir %>/app/scripts/**/*.js'
                    }
                ]
            }
        }
    };

    grunt.initConfig(grunt.util._.extend(taskConfig, userConfig));

    grunt.registerTask("dev", [
        'jsvalidate',
        'jshint',

        'clean:build',

        'copy:app_js',
        'copy:app_assets',
        'sass:dev',

        'copy:vendor_css',
        'copy:vendor_fonts',
        'copy:vendor_js',

        'ngAnnotate:dev',

        'html2js:dev',
        'htmlbuild:dev'
    ]);

    grunt.registerTask('debug', 'Main task for development', function () {
        grunt.task.run('dev');
        grunt.task.run('watch');
    });
};