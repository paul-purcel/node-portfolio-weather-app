module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify:{
			options:{
				mangle:false,
				sourceMap:true
			},
			app:{
				files:{
					'public/js/app.min.js':[
						'bower_components/jquery/dist/jquery.js',
						'bower_components/bootstrap/dist/js/bootstrap.js',
						'resources/js/app.js'
					]
				}
			}
		},

		cssmin:{
			options:{
				keepSpecialComments:0,
				shorthandCompacting: false,
				sourceMap:true
			},
			combine:{
				files:{
					'resources/css/app.css':[
						'bower_components/bootstrap/dist/css/bootstrap.css',
						'bower_components/font-awesome/css/font-awesome.css',
						'resources/css/style.css'
					]
				}
			},
			minify:{
				files:[{
					expand:true,
					cwd: 'resources/css',
					src: ['app.css'],
					dest: 'public/css/',
					ext: '.min.css'
				}]
			}
		},

		watch: {
			js:{
				files: ['resources/js/app.js'],
				tasks: ['uglify']
			},
			css: {
				files: ['resources/css/style.css'],
				tasks: ['cssmin']
			}
		}
	});

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Default task
	grunt.registerTask('default', ['watch']);
};