<?php

function my_scripts() {

        wp_register_script('angularjs', get_bloginfo('template_directory').'/build/angular.min.js', array(), null, false);
        wp_register_script('production', get_bloginfo('template_directory').'/build/production.min.js', array(), null, false);
        
        wp_enqueue_script('angularjs');
        wp_enqueue_script('production');

        wp_register_style( 'style', get_template_directory_uri() . '/build/styles.min.css' );

        wp_enqueue_style('style');

	wp_localize_script(
            'angularjs',
            'urlScripts',
            array(
                'partials' => trailingslashit( get_template_directory_uri() ) . 'partials/'
            )
        ); 
        
}

add_action( 'wp_enqueue_scripts', 'my_scripts' );
