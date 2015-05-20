<?php

function my_scripts() {

        wp_register_script('angularjs', get_bloginfo('template_directory').'/libs/js/full/angular.js', array(), null, false);
        wp_register_script('angular-route', get_bloginfo('template_directory').'/libs/js/full/angular-route.js', array(), null, false);
        wp_register_script('jquery', get_bloginfo('template_directory').'/libs/js/full/jquery.js', array(), null, false);
        wp_register_script('bootstrap', get_bloginfo('template_directory').'/libs/bootstrap/javascripts/bootstrap.js', array(), null, false);

        wp_register_script('app', get_bloginfo('template_directory').'/js/app.js', array(), null, false);
        wp_register_script('appController', get_bloginfo('template_directory').'/js/controllers/appController.js', array(), null, false);
        wp_register_script('headerController', get_bloginfo('template_directory').'/js/controllers/headerController.js', array(), null, false);
        wp_register_script('footerController', get_bloginfo('template_directory').'/js/controllers/footerController.js', array(), null, false);
        wp_register_script('homeController', get_bloginfo('template_directory').'/js/controllers/homeController.js', array(), null, false);
        wp_register_script('postsController', get_bloginfo('template_directory').'/js/controllers/postsController.js', array(), null, false);
        wp_register_script('postController', get_bloginfo('template_directory').'/js/controllers/postController.js', array(), null, false);
        wp_register_script('newsController', get_bloginfo('template_directory').'/js/controllers/newsController.js', array(), null, false);
        wp_register_script('errorController', get_bloginfo('template_directory').'/js/controllers/errorController.js', array(), null, false);
        
        wp_register_script('postsFactory', get_bloginfo('template_directory').'/js/factory/postsFactory.js', array(), null, false);
        
        wp_enqueue_script('angularjs');
        wp_enqueue_script('angular-route');
        wp_enqueue_script('jquery');
        wp_enqueue_script('bootstrap');
        wp_enqueue_script('app');
        wp_enqueue_script('appController');
        wp_enqueue_script('headerController');
        wp_enqueue_script('footerController');
        wp_enqueue_script('homeController');
        wp_enqueue_script('postsController');
        wp_enqueue_script('postController');
        wp_enqueue_script('newsController');
        wp_enqueue_script('errorController');
        
        wp_enqueue_script('postsFactory');
        
        wp_register_style( 'style', get_template_directory_uri() . '/css/style.css' );
        wp_register_style( 'font-awesome', get_template_directory_uri() . '/css/font-awesome.css' );

        wp_enqueue_style('style');
        wp_enqueue_style('font-awesome');
        
	wp_localize_script(
            'angularjs',
            'urlScripts',
            array(
                'partials' => trailingslashit( get_template_directory_uri() ) . 'partials/'
            )
        ); 
        
}

add_action( 'wp_enqueue_scripts', 'my_scripts' );
