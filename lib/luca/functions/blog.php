<?php namespace Luca\Theme;

/**
 * Blog
 */

/**
 * Render blog index category navigation
 *
 * @hooked luca/theme/blog/index
 */
if (!function_exists('blog_index_navigation')) {
  function blog_index_navigation() {
    luca()->getModule('blog')->renderCategoryMenu();
  }
}

/**
 * Render blog index using posts from WP Query
 *
 * @hooked luca/theme/blog/index
 */
if (!function_exists('blog_index_content')) {
  function blog_index_content() {
    global $wp_query;

    $blog = luca()->getModule('blog');
    $blog->renderIndex('default-index', $wp_query);
  }
}

/**
 * Render blog index using posts from WP Query
 *
 * @hooked luca/theme/blog/index
 */
if (!function_exists('blog_single_content')) {
  function blog_single_content() {
    global $wp_query;

    $blog = luca()->getModule('blog');
    $blog->renderSingle('default-single', $wp_query);
  }
}



function front_blog_posts($data) {
  $posts = luca()->getModule('blog')->getPosts(['posts_per_page' => 3]);

  foreach ($posts as $post) {
    $postdata = (new \BizInk\Luca\Modules\Blog\BlogSinglePresenter($post))->getData();
    $data['posts'][] = $postdata;
  }

  return $data;
}
add_filter('luca/front-blog/blocks/block_id/data', __NAMESPACE__ . '\\front_blog_posts');
