<?php

add_action('after_setup_theme', function() {
  remove_theme_support('luca-resources');
  remove_theme_support('luca-xero-resources');
  remove_theme_support('luca-covid-19-resources');
  add_theme_support('luca-dynamic-resources');
  add_theme_support('luca-disclaimer');
});

/**
 * Registered image sizes
 */
add_image_size('luca_hero', 1920, 500, true);
add_image_size('luca_banner', 1920, 400, true);
add_image_size('luca_featured_image', 1920, 700, true);
add_image_size('luca_logos_logo', 100, 100);
add_image_size('luca_blog_featured', 720, 422, true);
add_image_size('luca_testimonial_logo', 150, 150, true);
add_image_size('luca_team_featured', 360, 360, true);
add_image_size('luca_banner_image', 940);

// Theme-specific


/**
 * Page template configuration
 */
add_action('luca_init_after', function() {

  /**
   * Front page
   */
  luca()->getModule('columns')->registerContentBlock('front-columns', '', 'front', 0);
  // luca()->getModule('banners')->registerContentBlock('front-banner0', '', 'front', 1);
  // luca()->getModule('banners')->registerContentBlock('front-banner', '', 'front', 2);
  // luca()->getModule('banners')->registerContentBlock('front-banner2', '', 'front', 3);
  luca()->getModule('testimonials')->registerContentBlock('front-testimonials', '', 'front', 4);
  luca()->getModule('blog')->registerContentBlock('front-blog', '', 'front', 5);
  luca()->getModule('logos')->registerContentBlock('front-logos', '', 'front', 6);

  //luca()->getModule('banners')->registerContentBlock('front-banner2', '', 'front', 3);
  //luca()->getModule('fixed-price-packages')->registerContentBlock('front-packages', '', 'front', 6);
  //luca()->getModule('textarea')->registerContentBlock('front-textarea', '', 'front', 8);

  /**
   * Landing page
   */
  luca()->getModule('textarea')->registerContentBlock('landing-textarea', '', ['post_type' => 'landing-page'], 0);

  /**
   *  Packages page
   */
  luca()->getModule('fixed-price-packages')->registerContentBlock('packages-page', '', 'fixed-price-packages', 1);

  /**
   * Team page
   */
  luca()->getModule('team-members')->registerContentBlock('team-page', '', 'team', 1);

  /**
   * Testimonials page
   */
  luca()->getModule('testimonials')->registerContentBlock('testimonials-page', '', 'testimonials', 1);

  /**
   * Disclaimer
   */
  luca()->getModule('disclaimer')->registerContentBlock('disclaimer', '', ['post_type' => 'not_exists'], 100);
});

// remove unused formats from tinymce
//
function tiny_mce_remove_unused_formats($init)
{
  $init['block_formats'] = 'Paragraph=p;Heading 2=h2;Heading 3=h3;Heading 4=h4;Pre=pre';
  return $init;
}
add_filter('tiny_mce_before_init', 'tiny_mce_remove_unused_formats');

// activate styleselect in tinymce and add custom buttons
//
function custom_mce_buttons($buttons)
{
  array_unshift($buttons, 'styleselect');
  return $buttons;
}
add_filter('mce_buttons_2', 'custom_mce_buttons');

function mce_before_init_insert_formats($init_array)
{
  $style_formats = array(
    array(
      'title' => 'Blue button',
      'selector' => 'a',
      'classes' => 'button'
    ),
    array(
      'title' => 'Yellow button',
      'selector' => 'a',
      'classes' => 'button-secondary'
    ),
    array(
      'title' => 'White button',
      'selector' => 'a',
      'classes' => 'button-white'
    ),
  );

  $init_array['style_formats'] = json_encode($style_formats);
  return $init_array;
}
add_filter('tiny_mce_before_init', 'mce_before_init_insert_formats');

// Hide editor on packages template
//

add_action( 'admin_init', 'hide_editor' );
function hide_editor() {
  $post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
  if (!isset($post_id)) return;
  $template_file = get_post_meta($post_id, '_wp_page_template', true);

  if ($template_file == 'template-fixed-price-packages.php' || $template_file == 'template-testimonials.php'){
    remove_post_type_support('page', 'editor');
  }
}

// Register Custom Post Type
// function our_services() {

//   $labels = array(
//     'name'                  => _x( 'Services', 'Post Type General Name', 'text_domain' ),
//     'singular_name'         => _x( 'Service', 'Post Type Singular Name', 'text_domain' ),
//     'menu_name'             => __( 'Services', 'text_domain' ),
//     'name_admin_bar'        => __( 'Services', 'text_domain' ),
//     'archives'              => __( 'Service Archives', 'text_domain' ),
//     'attributes'            => __( 'Service Attributes', 'text_domain' ),
//     'parent_item_colon'     => __( 'Parent Service:', 'text_domain' ),
//     'all_items'             => __( 'All Services', 'text_domain' ),
//     'add_new_item'          => __( 'Add New Service', 'text_domain' ),
//     'add_new'               => __( 'Add New', 'text_domain' ),
//     'new_item'              => __( 'New Service', 'text_domain' ),
//     'edit_item'             => __( 'Edit Service', 'text_domain' ),
//     'update_item'           => __( 'Update Service', 'text_domain' ),
//     'view_item'             => __( 'View Service', 'text_domain' ),
//     'view_items'            => __( 'View Services', 'text_domain' ),
//     'search_items'          => __( 'Search Service', 'text_domain' ),
//     'not_found'             => __( 'Not found', 'text_domain' ),
//     'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
//     'featured_image'        => __( 'Featured Image', 'text_domain' ),
//     'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
//     'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
//     'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
//     'insert_into_item'      => __( 'Insert into Service', 'text_domain' ),
//     'uploaded_to_this_item' => __( 'Uploaded to this service', 'text_domain' ),
//     'items_list'            => __( 'Services list', 'text_domain' ),
//     'items_list_navigation' => __( 'Services list navigation', 'text_domain' ),
//     'filter_items_list'     => __( 'Filter services list', 'text_domain' ),
//   );
//   $args = array(
//     'label'                 => __( 'Service', 'text_domain' ),
//     'description'           => __( 'Post Type Description', 'text_domain' ),
//     'labels'                => $labels,
//     'supports'              => array( 'title', 'editor' ),
//     'hierarchical'          => false,
//     'public'                => true,
//     'show_ui'               => true,
//     'show_in_menu'          => true,
//     'menu_position'         => 20,
//     'menu_icon'             => 'dashicons-admin-generic',
//     'show_in_admin_bar'     => true,
//     'show_in_nav_menus'     => true,
//     'can_export'            => true,
//     'has_archive'           => false,
//     'exclude_from_search'   => false,
//     'publicly_queryable'    => true,
//     'capability_type'       => 'page',
//   );
//   register_post_type( 'services', $args );

// }
// add_action( 'init', 'our_services', 0 );