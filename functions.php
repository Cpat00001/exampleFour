<?php

function add_theme_scripts(){
    wp_enqueue_style('style',get_template_directory_uri() . './css/style.css',false,'1.0','all');
    wp_enqueue_script( 'script', get_template_directory_uri() . '/js/script.js', array ( 'jquery' ), 1.1, true);
}
add_action( 'wp_enqueue_scripts', 'add_theme_scripts' );

?>