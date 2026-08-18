<?php

/**
 * Menus
 */

register_nav_menus([
  'footer_nav_2' => __('Footer Navigation 2', 'sage')
]);

register_nav_menus([
  'main_nav_2' => __('Main Navigation 2', 'sage')
]);

add_filter('luca/global_fields/menus/topbar_navigation/args', function($args) {
  $args['menu_class'] = 'navList';
  return $args;
});

add_filter('luca/global_fields/menus/header_navigation/args', function($args) {
  $args['menu_class'] = 'navList';
  $args['walker'] = new wp_bootstrap_navwalker();
  return $args;
});

add_filter('luca/global_fields/menus/footer_navigation/args', function($args) {
  $args['menu_class'] = 'navList';
  return $args;
});


