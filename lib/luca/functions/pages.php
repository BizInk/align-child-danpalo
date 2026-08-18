<?php namespace Luca\Theme;

/**
 * Standard page template
 */
if (!function_exists('page_content')) {
  function page_content() {
    global $wp_query;
    luca()->getModule('page')->renderContent('default', $wp_query);
  }
}

/**
 * Sidebar
 */
if (!function_exists('page_sidebar')) {
  function page_sidebar() {
    include \Roots\Sage\Wrapper\sidebar_path();
  }
}



/**
 * Team page
 */
if (!function_exists('team_content')) {
  function team_content() {
    global $wp_query;
    //luca()->getModule('page')->renderContent('default', $wp_query, ['wrapper' => 'section', 'container' => true]);
    luca()->getModule('team-members')->renderBlock('team-page', 'default', ['wrapper' => 'section', 'container' => true]);
  }
}

/**
 * Single Team Member
 */
if (!function_exists('single_team_sidebar')) {
  function single_team_sidebar() {
    global $wp_query;
    luca()->getModule('team-members')->renderProfileCard('default', $wp_query);
  }
}

if (!function_exists('single_team_content')) {
  function single_team_content() {
    global $wp_query;
    luca()->getModule('team-members')->renderProfile('default', $wp_query);
  }
}

/**
 * Single Testimonial content
 */
if (!function_exists('single_testimonial_content')) {
  function single_testimonial_content() {
    global $wp_query;
    luca()->getModule('testimonials')->renderTestimonial('default', $wp_query);
  }
}


/**
 * Packages page
 */
if (!function_exists('packages_content')) {
  function packages_content() {
    global $wp_query;
    //luca()->getModule('page')->renderContent('default', $wp_query, ['wrapper' => 'section', 'container' => true]);
    luca()->getModule('fixed-price-packages')->renderBlock('packages-page', 'default', ['wrapper' => 'section pricing-packages-content', 'container' => true]);
  }
}

/**
 * Testimonials page
 */
if (!function_exists('testimonials_content')) {
  function testimonials_content() {
    global $wp_query;
    //luca()->getModule('page')->renderContent('default', $wp_query, ['wrapper' => 'section', 'container' => true]);
    luca()->getModule('testimonials')->renderBlock('testimonials-page', 'blocks/single-content', ['wrapper' => 'section', 'container' => true]);
  }
}

/**
 * Landing Pages
 */

/**
 * Render landing page content blocks
 *
 * @hooked luca/landing-pages/single/content
 */
if (!function_exists('landing_page_content')) {
  function landing_page_content() {
    luca()->getModule('textarea')->renderBlock('landing-textarea', 'default', ['wrapper' => 'section']);
  }
}
