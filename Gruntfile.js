module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		dirs: {
			web: ''
		},

		jslint: {
			build: {
				src: [
					'<%= dirs.web %>js/*.js',
					'!<%= dirs.web %>js/*.min.js'
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
					'<%= dirs.web %>js/main.min.js': ['<%= dirs.web %>js/main.js', '!<%= dirs.web %>js/main.min.js'],
					'<%= dirs.web %>js/jquery-example.min.js': ['<%= dirs.web %>js/jquery-example.js', '!<%= dirs.web %>js/jquery-example.min.js']
				}
			}
		},

		watch: {
			options: {
				livereload: true,
			},
			grunt: {
				options: {
					livereload: false,
				},
				files: ['Gruntfile.js']
			},
			scripts: {
				files: ['<%= jslint.build.src %>'],
				tasks: ['jslint','uglify']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-jslint');

	grunt.registerTask('default', ['jslint','uglify']);

};