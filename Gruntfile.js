
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	bowercopy: {
		options: {
			srcPrefix: 'bower_components'
		},
		scripts: {
			options: {
				destPrefix: 'libs'
			},
			files: {
                                'js/minify/angular.min.js': 'bower_components/angular/angular.min.js',
                                'js/minify/angular-route.min.js': 'bower_components/angular-route/angular-route.min.js',
                                'js/minify/ui-bootstrap.min.js': 'bower_components/angular-bootstrap/ui-bootstrap.min.js',
				'js/minify/jquery.min.js': 'bower_components/jquery/dist/jquery.min.js',
                                'js/full/angular.js': 'bower_components/angular/angular.js',
                                'js/full/angular-route.js': 'bower_components/angular-route/angular-route.js',
                                'js/full/ui-bootstrap.js': 'bower_components/angular-bootstrap/ui-bootstrap.js',
				'js/full/jquery.js': 'bower_components/jquery/dist/jquery.js',
                                'bootstrap': 'bower_components/bootstrap-sass-official/assets',
                                'font-awesome': 'bower_components/font-awesome',
                        }
		},
                styles: {
			options: {
				destPrefix: 'css'
			},
			files: {
                                'font-awesome.css': 'bower_components/font-awesome/css/font-awesome.css',
                        }
		},
                fonts: {
			options: {
				destPrefix: 'fonts'
			},
			files: {
                                'FontAwesome.otf':'bower_components/font-awesome/fonts/FontAwesome.otf',
                                'fontawesome-webfont.eot':'bower_components/font-awesome/fonts/fontawesome-webfont.eot',
                                'fontawesome-webfont.svg':'bower_components/font-awesome/fonts/fontawesome-webfont.svg',
                                'fontawesome-webfont.ttf':'bower_components/font-awesome/fonts/fontawesome-webfont.ttf',
                                'fontawesome-webfont.woff':'bower_components/font-awesome/fonts/fontawesome-webfont.woff'
			}
		},
                fonts_build: {
			options: {
				destPrefix: 'build/fonts'
			},
			files: {
                                'FontAwesome.otf':'bower_components/font-awesome/fonts/FontAwesome.otf',
                                'fontawesome-webfont.eot':'bower_components/font-awesome/fonts/fontawesome-webfont.eot',
                                'fontawesome-webfont.svg':'bower_components/font-awesome/fonts/fontawesome-webfont.svg',
                                'fontawesome-webfont.ttf':'bower_components/font-awesome/fonts/fontawesome-webfont.ttf',
                                'fontawesome-webfont.woff':'bower_components/font-awesome/fonts/fontawesome-webfont.woff'
			}
		},
                fonts_build: {
			options: {
				destPrefix: 'build'
			},
			files: {
                                'angular.min.js': 'bower_components/angular/angular.min.js'
			}
		}
	},
        compass: {
            dist: {
                files: {
                      src: 'sass/style.scss', 
                      dest:'css/style.css'
                    }
                }
        },
        concat: {   
            dist: {
                src: [
                    'libs/js/minify/jquery.min.js',
                    'libs/bootstrap/javascripts/bootstrap.js',
                    'libs/js/minify/angular-route.min.js',
                    'js/app.js',
                    'js/controllers/appController.js',
                    'js/controllers/errorController.js',
                    'js/controllers/footerController.js',
                    'js/controllers/headerController.js',
                    'js/controllers/homeController.js',
                    'js/controllers/newsController.js',
                    'js/controllers/postsController.js',
                    'js/controllers/postController.js',
                    'js/factory/postsFactory.js'

                ],
                dest: 'build/production.js'
            }
        },
        uglify: {
            build: {
                src: 'build/production.js',
                dest: 'build/production.min.js'
            }
        },
        concat_css: {
            options: {
            },
            all: {
                src: ["css/*.css"],
                dest: "build/styles.css"
            },
        },
        cssmin: {
            target: {
              files: [{
                expand: true,
                cwd: 'build',
                src: ['*.css', '!*.min.css'],
                dest: 'build',
                ext: '.min.css'
              }]
            }
        }
  });


  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  grunt.registerTask('default', ['bowercopy', 'compass', 'concat', 'uglify', 'concat_css', 'cssmin']);

};

