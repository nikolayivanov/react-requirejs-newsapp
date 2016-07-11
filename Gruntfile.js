module.exports = function(grunt) {

    grunt.initConfig({
        /* Check code style */
        jshint: {
            js: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            jsx: ['src/components/**/*.jsx'],
            options: {
                reporter: require('jshint-stylish')
            }
        },

        /* JSX compiling */
        react: {
            dynamic_mappings: {
                files: [
                    /* components compiling */
                    {
                        expand: true,
                        cwd: './src/components',
                        src: ['**/**.jsx'],
                        dest: './src/components',
                        ext: '.js'
                    },
                    {
                        expand: true,
                        cwd: './src/',
                        src: ['main.jsx'],
                        dest: './src',
                        ext: '.js'
                    },
                    /* JSX test compiling */
                    {
                        expand: true,
                        cwd: './test/unit-tests/components',
                        src: ['**/**.jsx'],
                        dest: './test/unit-tests/components',
                        ext: '.test.js'
                    }
                ]
            }
        },
        /* Concatenating all styles into single file*/
        concat: {
            all: {
                src: ['./src/css/app.css', './src/components/*.css'],
                dest: "./src/css/styles.css"
            },
        },

        /* Running http server */
        connect: {
            server: {
                options: {                    
                    open: true,
                    port: 3000,
                    hostname: 'localhost',
                    base: {
                        path: '.',
                          options: {
                            index: 'index.html',
                            maxAge: 300000
                        }
                    }
                }
            }
        },

        /* Watching for changes in project directory */
        watch: {            
            /* Watching for scripts changes */
            scripts: {
                files: [
                    './src/components/**/**.jsx'
                ],
                tasks: ['build'],
                options: {
                    spawn: true,
                    reload: true
                }
            },
            /* Watching for Gruntfile changes */
            gruntfile: {
                files: ['./Gruntfile.js'],
                options: {
                    reload: true
                }
            },
            /* Watching for tests changes */
            tests: {
                files: ['./test/unit-tests/components/**/**.jsx'],
                tasks: ['build', 'test'],
                options: {
                    reload: true
                }
            }
        },

        /* Cleaning build results */
        clean: {
            build: ['./build/'],
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsxhint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-react');

    grunt.registerTask('lint', ['jshint']);
    grunt.registerTask('default', ['server']);
    grunt.registerTask('build', ['clean', 'concat:all', 'react']);
    grunt.registerTask('server', ['build', 'connect:server', 'watch']);
    grunt.registerTask('test', ['build']);

};