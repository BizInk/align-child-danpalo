<?php do_action('luca/theme/sidebar/before'); ?>

<?php if (is_singular('post') || is_post_type_archive('post') || is_category() || is_tag() || is_home() || is_search()): ?>
  <?php dynamic_sidebar('sidebar-blog'); ?>
<?php else: ?>
  <?php dynamic_sidebar('sidebar-primary'); ?>
<?php endif; ?>

<?php do_action('luca/theme/sidebar/after'); ?>
