<?php if (count($data['categories'])): ?>
  <div class="catMenu container">
    <div class="catMenu_wrapper">

      <div class="dropdown js-catMenu">
        <button class="catMenu_button dropdown-toggle" type="button" data-toggle="dropdown">
          <?php if(is_category()): ?>
            <?= single_cat_title(); ?>
          <?php else: ?>
            <?= __('Categories', 'bizink'); ?>
          <?php endif; ?>
          <span></span>
        </button>
        <ul class="catMenu_menu dropdown-menu dropdown-menu-left">

          <?php foreach ($data['categories'] as $category): ?>

            <li class="catMenu_item <?php echo $category['active'] ? 'active' : ''; ?>">

              <a href="<?= $category['permalink']; ?>" class="catMenu_link">
                <?= $category['name']; ?>
              </a> <!-- /.catMenu_link -->

            </li> <!-- /.catMenu_item -->

          <?php endforeach; ?>

        </ul> <!-- /.catMenu_menu -->
      </div><!-- /.dropdown -->

    </div> <!-- /.catMenu_wrapper -->
  </div> <!-- /.catMenu -->
<?php endif; ?>
