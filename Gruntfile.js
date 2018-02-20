module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				options: {
					outputStyle: 'compressed',
					precision: 3
				},
				files: {
					"adminer.css": "src/adminer.scss"
				}
			}
		},
		dataUri: {
			dist: {
				src: ['adminer.css'],
				dest: './',
				options: {
					// Encode all svg files in the folder which are declared in the css
					target: ['src/*.svg'],
					// Adjust relative path
					fixDirLevel: true,
					// Base directory where images should be searched
					baseDir: 'src',
				}
			}
		},
	})

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-data-uri');

	let taskList = ['sass', 'dataUri'];
	grunt.registerTask('default', taskList);
	grunt.registerTask('build', taskList);
}