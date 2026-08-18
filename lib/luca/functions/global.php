<?php namespace Luca\Theme;

/**
 * Header
 */


/**
 * Render header view
 *
 * @hooked get_header
 */
if (!function_exists('header_content')) {
  function header_content() {
    $global = luca()->getModule('global-fields');
    $data = $global->getData();
    $global->render('default-header', $data);
  }
}

/**
 * Render topbar partial
 *
 * @hooked luca/global-fields/header/topbar/content
 */
if (!function_exists('topbar_content')) {
  function topbar_content() {
    luca()->getModule('global-fields')->renderPartial('topbar');
  }
}

/**
 * Render navbar partial
 *
 * @hooked luca/global-fields/header/navbar/content
 */
if (!function_exists('navbar_content')) {
  function navbar_content() {
    luca()->getModule('global-fields')->renderPartial('navbar');
  }
}

/**
 * Render navbar social partial
 *
 * @hooked luca/global-fields/header/navbar/social
 */
if (!function_exists('navbar_social')) {
  function navbar_social() {
    luca()->getModule('social')->renderIcons();
  }
}


/**
 * Page Header
 */

/**
 * Render page header wrapper with background
 *
 * @hooked luca/global-fields/header/navbar/content
 */
if (!function_exists('page_header')) {
  function page_header() {

    $featuredImage = luca()->getModule('featured-image');
    $featuredImage->render('background', $featuredImage->getData());
  }
}

/**
 * Render page header contents
 *
 * @hooked luca/global-fields/header/navbar/content
 */
if (!function_exists('page_header_content')) {
  function page_header_content() {
    get_template_part('templates/page-header');
  }
}


/**
 * Footer
 */


/**
 * Render theme's own footer.php template
 *
 * @hooked get_footer
 */
if (!function_exists('footer_content')) {
  function footer_content() {
    get_template_part('templates/footer');
  }
}

/**
 * Render disclaimer banner
 *
 * @hooked luca/global_fields/footer/disclaimer
 */
if (!function_exists('footer_disclaimer')) {
  function footer_disclaimer() {
    luca()->getModule('disclaimer')->renderBlock('disclaimer', 'default', ['wrapper' => 'disclaimer', 'container' => true]);
  }
}

/**
 * Render newsletter signup form
 *
 * @hooked luca/global_fields/footer/newsletter
 */
if (!function_exists('footer_newsletter')) {
  function footer_newsletter() {
    if ($form = get_field('footer_form', 'option')) {
      $forms = luca()->getModule('gravity-forms');
      $forms->renderForm($form['id'], 'default', ['modifier' => 'gForm-monoField']);
    }
  }
}

/**
 * Render social icons
 *
 * @hooked luca/global_fields/footer/social
 */
if (!function_exists('footer_social')) {
  function footer_social() {
    luca()->getModule('social')->renderIcons();
  }
}

/**
 * Render contact information
 *
 * @hooked luca/global_fields/footer/contact
 */
if (!function_exists('footer_contact')) {
  function footer_contact() {
    luca()->getModule('global-fields')->renderPartial('contact');
  }
}

/**
 * Render footer navigation menu
 *
 * @hooked luca/global_fields/footer/navigation
 */
if (!function_exists('footer_navigation')) {
  function footer_navigation() {
    luca()->getModule('global-fields')->renderPartial('navigation-footer');
  }
}

/**
 * Render copyright statement
 *
 * @hooked luca/global_fields/footer/copyright
 */
if (!function_exists('footer_copyright')) {
  function footer_copyright() {
    luca()->getModule('global-fields')->renderPartial('copyright');
  }
}


/**
 * Social
 */
if (!function_exists('share_icons')) {
  function share_icons() {
    luca()->getModule('social')->renderShareButtons('default', get_queried_object_id());

  }
}
