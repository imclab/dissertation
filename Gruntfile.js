'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            compile: {
                options: {
                    style: 'compressed',
                    cacheLocation: 'css/sass/.sass-cache'
                },
                files: {
                    'css/main.css': 'css/sass/main.scss'
                }
            }
        },
        regarde: {
            markdown: {
                files: '_content/**/*.md',
                tasks: ['clean', 'concat']
            }
        },
        concat: {
            options: {
                separator: '\r\n\n'
            },
            dist: {
                src: ['_content/abstract.md', '_content/Chapters/*.md', '_content/conclusion.md', '_content/bibliography.md'],
                dest: '_posts/<%= grunt.template.today("yyyy-mm-dd") %>-dissertation.md'
            }
        },
        clean: {
            'default': ['_posts/*.md']
        }
    });

    // load tasks
    grunt.loadNpmTasks('grunt-regarde');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('watch', ['regarde']);

    grunt.registerTask('build', ['clean', 'concat']);

};