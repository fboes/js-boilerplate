module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jslint: {
      build: {
        src: [
          'js/*.js',
          '!js/*.min.js'
        ],
        directives: {
          browser: true, white: true
        },
        options: {
          failOnError: false
        }
      }
    },

    uglify: {
      build: {
        files: {
          'js/main.min.js': ['js/main.js', '!js/main.min.js'],
          'js/jquery-example.min.js': ['js/jquery-example.js', '!js/jquery-example.min.js']
        }
      }
    },

    watch: {
      scripts: {
        files: ['js/*.js', '!js/*.min.js'],
        tasks: ['jslint','uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jslint');

  grunt.registerTask('default', ['jslint','uglify']);

};