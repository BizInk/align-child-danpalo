<?php

/**
 * Settings
 */
add_filter('luca/admin/theme_styles_template', function() {
  return 'templates/theme-styles';
});

/**
 * Layout
 *
 * @see Luca\Theme\navbar_content
 */

// Header
add_action('get_header',                                  'Luca\Theme\page_header');
add_action('luca/global_fields/header/navbar/content',    'Luca\Theme\navbar_content');
add_action('luca/global_fields/header/navbar/social',     'Luca\Theme\navbar_social');

// Page header
add_action('luca/theme/title',                         'Luca\Theme\page_header_content');
add_action('luca/featured_image/blocks/content',       'Luca\Theme\header_content');

// Footer
add_action('get_footer',                               'Luca\Theme\footer_content');
add_action('luca/theme/footer/newsletter',             'Luca\Theme\footer_newsletter');
add_action('luca/theme/footer/social',                 'Luca\Theme\footer_social');
add_action('luca/theme/footer/contact',                'Luca\Theme\footer_contact');
add_action('luca/theme/footer/navigation',             'Luca\Theme\footer_navigation');
add_action('luca/theme/footer/copyright',              'Luca\Theme\footer_copyright');
add_action('luca/theme/footer/disclaimer',             'Luca\Theme\footer_disclaimer');


/**
 * Blog
 *
 * @see Luca\Theme\blog_index_content
 * @see Luca\Theme\blog_single_content
 */
add_action('luca/theme/blog/index/content',  'Luca\Theme\blog_index_navigation', 10);
add_action('luca/theme/blog/index/content',  'Luca\Theme\blog_index_content', 20);
add_action('luca/theme/blog/single/content', 'Luca\Theme\blog_single_content');


/**
 * Resources
 *
 * @see Luca\Theme\dynamic_resources_index_content
 * @see Luca\Theme\dynamic_resources_index_topics
 * @see Luca\Theme\dynamic_resources_index_types
 * @see Luca\Theme\dynamic_resources_content_topic_content
 * @see Luca\Theme\dynamic_resources_content_topic_content
 * @see Luca\Theme\dynamic_resources_single_content
 */
add_action('luca/theme/dynamic-resources/index/content',  'Luca\Theme\dynamic_resources_index_content', 10);
add_action('luca/theme/dynamic-resources/index/content',  'Luca\Theme\dynamic_resources_index_topics', 20);
add_action('luca/theme/dynamic-resources/index/content',  'Luca\Theme\dynamic_resources_index_types', 30);

add_action('luca/theme/dynamic-resources/content-topic/content',  'Luca\Theme\dynamic_resources_content_topic_content');
add_action('luca/theme/dynamic-resources/content-type/content',  'Luca\Theme\dynamic_resources_content_type_content');

add_action('luca/theme/dynamic-resources/single/content', 'Luca\Theme\dynamic_resources_single_content');

/**
 * Templates
 *
 * @see Luca\Theme\team_content
 * @see Luca\Theme\packages_content
 */

// Sidebar
add_action('luca/theme/page/sidebar', 'Luca\Theme\page_sidebar');

// Standard page
add_action('luca/theme/page/content', 'Luca\Theme\page_content');

// Team page
add_action('luca/theme/team/content', 'Luca\Theme\team_content');

// Packages page
add_action('luca/theme/fixed-price-packages/content', 'Luca\Theme\packages_content');

// Testimonials page
add_action('luca/theme/testimonials/content', 'Luca\Theme\testimonials_content');

/**
 * Custom Post Types
 *
 * @see Luca\Theme\landing_page_content
 */
add_action('luca/theme/team/single/sidebar', 'Luca\Theme\single_team_sidebar');
add_action('luca/theme/team/single/content', 'Luca\Theme\single_team_content');
add_action('luca/theme/testimonial/single/content', 'Luca\Theme\single_testimonial_content');
add_action('luca/landing-pages/single/content', 'Luca\Theme\landing_page_content');

/**
 * Social
 */
add_action('luca/blog/single/after', 'Luca\Theme\share_icons');
add_action('luca/dynamic-resources/single/after', 'Luca\Theme\share_icons');
