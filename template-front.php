<?php
/**
 * Template Name: Front page
 */
?>

<?php luca()->getModule('columns')->renderBlock('front-columns', 'default', ['wrapper' => 'section our-services-text', 'container' => true]); ?>

<?php luca()->getModule('testimonials')->renderBlock('front-testimonials', 'default', ['wrapper' => 'section testimonials', 'container' => true]); ?>

<?php get_template_part( 'templates/front/articles' ); ?>

<?php get_template_part( 'templates/front/packages' ); ?>

<?php luca()->getModule('blog')->renderBlock('front-blog', 'default', ['wrapper' => 'section blog-slider', 'container' => true]); ?>

<?php get_template_part( 'templates/front/newsroom' ); ?>

<?php luca()->getModule('logos')->renderBlock('front-logos', 'default', ['wrapper' => 'section section-frontLogos', 'container' => true]); ?>




