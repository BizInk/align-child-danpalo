<?php do_action($this->hook('single/before')); ?>

<?php if ($data['logo_url']): ?>
<a class="logo" href="<?= $data['logo_url']; ?>" target="_blank">
  <?php endif; ?>

  <?php if ($data['image_full']): ?>
    <div class="logo">
      <div class="logo_wrap">
        <img class="logo_image"
             src="<?= $data['image_full']; ?>"
             alt="Partner logo"
        />
      </div>
    </div>
  <?php endif; ?>

  <?php if ($data['logo_url']): ?>
</a><!-- ./logo_link -->
<?php endif; ?>

<?php do_action($this->hook('single/after')); ?>
