module.exports = {
    build_dir: 'build',
    compile_dir: 'bin',
    compile_dir_scripts_temp: 'bin/scripts/temp',

    app_files: {
        js: {
            //angular templates
            templates: ['app/scripts/**/*.view.html'],

            //all js unit tests
            jsunit: [ 'app/scripts/**/*.test.js' ],

            // all files without tests
            all: [
                'app/scripts/**/*.js',
                '!app/scripts/**/*.test.js'
            ],

            // main module
            main: [
                'app/scripts/calendar.module.js',
                'app/scripts/calendar.*.js',
                '!app/scripts/*.test.js'
            ],

            // all js application file without main, core and unit test
            app: [
                'app/scripts/**/*.module.js',
                'app/scripts/**/*.config.js',
                'app/scripts/**/*.route.js',
                'app/scripts/**/*.constant.js',
                'app/scripts/**/*.value.js',
                'app/scripts/**/*.run.js',
                'app/scripts/**/*.service.js',
                'app/scripts/**/*.class.js',
                'app/scripts/**/*.directive.js',
                'app/scripts/**/*.controller.js',
                'app/scripts/**/*.resource.js',
                'app/scripts/**/*.filter.js',
                '!app/scripts/**/*.test.js'
            ],

            html: [
                'app/index.html'
            ],

            test: [
                'app/vendor/jquery/dist/jquery.js',
                'app/vendor/jasmine-jquery/lib/jasmine-jquery.js'
            ]
        },

        sass: 'app/scss/init.scss',
        sasses: 'app/scss/**/*.scss',

        html: 'app/index.html'
    },

    vendor_files: {
        js: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-animate/angular-animate.js',
            'app/bower_components/angular-ui-router/release/angular-ui-router.js',
            'app/bower_components/angular-growl/build/angular-growl.js',
            'app/bower_components/angular-bootstrap/ui-bootstrap.js',
            'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'app/bower_components/moment/moment.js',
            'app/bower_components/lodash/lodash.js',
            'app/bower_components/restangular/dist/restangular.js',
            'app/bower_components/angular-sanitize/angular-sanitize.js',
            'app/bower_components/angular-dialog-service/dist/dialogs.js',
            'app/vendor/components/mue.js'
        ],
        css: [
            'app/bower_components/angular-growl/build/angular-growl.min.css',
            'app/bower_components/angular-bootstrap/ui-bootstrap-csp.css'
        ],
        fonts: [

        ],
        assets: [

        ]
    }
};