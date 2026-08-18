<?php namespace Luca\Theme;

/**
 * Dynamic resources
 */
/**
 * Render resource page content, typically pulled from the page set in Settings > Reading
 */
if (!function_exists('dynamic_resources_index_content')) {
  function dynamic_resources_index_content() {
    $resources = luca()->getModule('dynamic-resources')->getCurrentResource();
    $resources->renderContent('default-index-content', ['wrapper' => 'section', 'container' => true]);
  }
}

/**
 * Render topics nav block
 */
if (!function_exists('dynamic_resources_index_topics')) {
  function dynamic_resources_index_topics() {
    global $wp_query;

    $resources = luca()->getModule('dynamic-resources')->getCurrentResource();
    $resources->renderTopics('default-index-topics', $wp_query, ['wrapper' => '', 'container' => false]);
  }
}

/**
 * Render types block
 */
if (!function_exists('dynamic_resources_index_types')) {
  function dynamic_resources_index_types() {
    global $wp_query;

    $resources = luca()->getModule('dynamic-resources')->getCurrentResource();
    $resources->renderTypes('default-index-types', $wp_query, ['wrapper' => '', 'container' => false]);
  }
}

/**
 * Render Content Topics page
 */
if (!function_exists('dynamic_resources_content_topic_content')) {
  function dynamic_resources_content_topic_content() {
    global $wp_query;

    $resources = luca()->getModule('dynamic-resources')->getCurrentResource();
    $resources->renderTopicsTaxonomy('default-taxonomy-topics', $wp_query, ['wrapper' => 'section taxonomy', 'container' => true]);
  }
}

/**
 * Render Content Types page
 */
if (!function_exists('dynamic_resources_content_type_content')) {
  function dynamic_resources_content_type_content() {
    global $wp_query;

    $resources = luca()->getModule('dynamic-resources')->getCurrentResource();
    $resources->renderTypesTaxonomy('default-taxonomy-types', $wp_query, ['wrapper' => 'section taxonomy', 'container' => true]);
  }
}

/**
 * Render single resource content
 */
if (!function_exists('dynamic_resources_single_content')) {
  function dynamic_resources_single_content() {
    global $wp_query;

    $resources = luca()->getModule('dynamic-resources')->getCurrentResource();
    $resources->renderSingle('default-single', $wp_query);
  }
}
