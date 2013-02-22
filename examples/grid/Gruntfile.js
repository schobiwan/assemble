/*
 * Assemble Example: Grid
 * http://github.com/assemble/assemble
 *
 * Copyright (c) 2013 Assemble
 * MIT License
 */


module.exports = function(grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({

    pkg:   grunt.file.readJSON('package.json'),
    build: grunt.file.readJSON('build.json'),


    // Build static files from templates
    assemble: {
      options: {
        engine: 'handlebars',
        helpers: '<%= build.helpers %>',
        preprocessors: '<%= build.preprocessors %>',

        docs: true,
        production: false,
        flatten: true,
        assets: 'dest/assets',
        data:  [
          'src/data/**/*.json'
        ]
      },
      pages: {
        options: {
          layout: 'src/layouts/layout.mustache',
          partials: [
            'src/partials/**/*.mustache'
          ]
        },
        files: {
          // Compile each page in the project.
          'dest': [
            'src/pages/**/*.mustache'
          ]
        }
      }
    },

    clean: {
      dest: {
        src: [ 'dest/*.*' ]
      }
    },

    watch: {
      src: {
        files: [ 'src/**/*.*' ],
        tasks: [ 'clean', 'assemble' ]
      }
    }

  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Load local tasks from project root.
  grunt.loadTasks('../../tasks');


  // Default task to be run.
  grunt.registerTask('default', [
    'clean',
    'assemble'
  ]);

};
