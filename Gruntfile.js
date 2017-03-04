module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				options: {
					style: 'compressed',
					precision: 3,
					sourcemap: 'none'
				},
				files: {
					"adminer.css": "src/adminer.scss"
				}
			}
		},
	})

	grunt.loadNpmTasks('grunt-contrib-sass')
}
