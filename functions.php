<?php

/**
 * If Luca is not activated, abandon ship.
 */
if (!function_exists('luca')) {
  add_action( 'admin_notices', function() { ?>
    <div class="error"><p>Luca plugin is not active. Aborting theme load.</p></div>
  <?php });
  return;
}

/**
 * ACF should be a Provider, but this is rather complicated to set up
 * todo: fix
 */
if (!class_exists('\acf')) {
  add_action( 'admin_notices', function() { ?>
    <div class="error"><p>Advanced Custom Fields plugin is not active. Aborting theme load.</p></div>
  <?php });
  return;
}

/**
 * Sage includes
 *
 * The $sage_includes array determines the code library included in your theme.
 * Add or remove files to the array as needed. Supports child theme overrides.
 *
 * Please note that missing files will produce a fatal error.
 *
 * @link https://github.com/roots/sage/pull/1042
 */
$sage_includes = [
  'lib/assets.php',                // Scripts and stylesheets
  'lib/extras.php',                // Custom functions
  'lib/setup.php',                 // Theme setup
  'lib/titles.php',                // Page titles
  'lib/wrapper.php',               // Theme wrapper class
  'lib/luca/config.php',           // Luca modules configuration
  'lib/luca/luca.php',             // Code responsible for customizing Luca
  'lib/luca/hooks.php',            // Luca action & filter calls
  'lib/luca/functions.php',        // Glue layer between Luca modules and theme
  'lib/luca/fields.php',           // New ACF fields and modifications to existing ones
];

foreach ($sage_includes as $file) {
  if (!$filepath = locate_template($file)) {
    trigger_error(sprintf(__('Error locating %s for inclusion', 'sage'), $file), E_USER_ERROR);
  }

  require_once $filepath;
}
unset($file, $filepath);
