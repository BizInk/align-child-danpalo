<?php namespace Luca\Theme;
// Logos
//
function admin_logo_white($field_group) {
  $field_group['fields'] = array_merge($field_group['fields'], require('fields/admin-logo.php'));
  return $field_group;
}
add_filter('luca/acf/field_group/group__logo__luca_logo', __NAMESPACE__ . '\admin_logo_white');

// Footer fields
//
function footer_fields($field_group) {
  $field_group['fields'] = array_merge($field_group['fields'], require('fields/global-footer.php'));
  return $field_group;
}
add_filter('luca/acf/field_group/group__website_settings__luca_global', __NAMESPACE__ . '\footer_fields');

// Services
//
require('fields/services.php');

// Page headers
//
function header_fields() {
  acf_add_local_field_group(require('fields/front-hero.php'));
  acf_add_local_field_group(require('fields/page-header.php'));
}
header_fields();

// Banner
//
// function banner_field($field_group) {
//   array_splice($field_group['fields'], 3, 0, require('fields/front-banner.php'));
//   return $field_group;
// }
// add_filter('luca/banners/fields/blocks/content', __NAMESPACE__ . '\\banner_field');

// function banner_field_data($data, $block) {
//   $data['align'] = $block->getField('banner_text_align');
//   $data['image'] = $block->getField('banner_image');
//   return $data;
// }
// add_filter('luca/banners/blocks/data', __NAMESPACE__ . '\\banner_field_data', 10, 2);

// Front blog fields
//
function front_blog($field_group) {
  $field_group['fields'] = array_merge($field_group['fields'], require('fields/front-blog.php'));
  return $field_group;
}
add_filter('luca/blog/fields/blocks/content', __NAMESPACE__ . '\front_blog');

function front_blog_data($data, $block) {
  $data['title'] = $block->getField('front_blog_title');
  $data['intro'] = $block->getField('front_blog_intro');
  return $data;
}
add_filter('luca/blog/blocks/data', __NAMESPACE__ . '\\front_blog_data', 10, 2);

// Footer infobar
//
function footer_infobar_fields($field_group) {
  $field_group['fields'] = array_merge($field_group['fields'], require('fields/global-footer-infobar.php'));
  return $field_group;
}
add_filter('luca/acf/field_group/group__website_settings__luca_global', __NAMESPACE__ . '\footer_infobar_fields');

// Post author
//
require('fields/post-author.php');

// Team page
//
require('fields/template-team.php');

// Change fixed price packages fields
//
/*function packages_fields($field_group) {
  $field_group['fields'][2]['max'] = '3';
  return $field_group;
}
add_filter('luca/fixed-price-packages/fields/blocks/content', __NAMESPACE__ . '\packages_fields');*/

function package_subtitle_field($field_group) {
  array_splice($field_group['fields'], 0, 0, require('fields/post-package.php'));
  return $field_group;
}
add_filter('luca/acf/field_group/group__fixed_price_packages__luca_fixed_price_packages', __NAMESPACE__ . '\package_subtitle_field');

require('fields/faq-packages.php');

require('fields/contact-us.php');

require('fields/contact-us-bottom.php');

require('fields/description-list.php');

require('fields/front-articles.php');

require('fields/front-packages.php');

require('fields/our-services.php');

require('fields/team-section.php');

require('fields/blog-featured-bg.php');

require('fields/front-our-services.php');

require('fields/front-newsroom.php');