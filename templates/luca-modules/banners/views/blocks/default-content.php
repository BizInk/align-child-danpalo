<?php
$banner_modifier = 'transparent';
if ($data['background_type'] === 'color') {
  $banner_modifier = 'solid';
} elseif ($data['background_type'] === 'image' && $data['image']) {
  $banner_modifier = 'solid';
}

$color_class = '';
if ($data['text_color'] && ($data['background_type'] === 'image' || $data['background_type'] === 'color')) {
  $color_class = 'u-customColor';
}

$align_class = '';
if ($data['align'] == 'left') {
  $align_class = ' left';
} elseif ($data['align'] == 'right') {
  $align_class = ' right';
}
?>

<div
  id="<?= $this->block_id; ?>"
  class="banner banner-<?= $banner_modifier; ?> <?= $color_class; ?>"
  <?php if ($data['text_color']): ?>style="color: <?= $data['text_color']; ?>"<?php endif; ?>
>
  <div class="container">

    <?php do_action($this->hook('block/before')); ?>

    <div class="banner_content<?= $align_class; ?>">
      <?php if ($data['title']): ?>
        <div class="blockHeader">
          <?php if ($data['isFirst']): ?>
            <h1 class="blockHeader_title">
              <?= $data['title']; ?>
            </h1>
          <?php else: ?>
            <h2 class="blockHeader_title">
              <?= $data['title']; ?>
            </h2>
          <?php endif; ?>
        </div>
      <?php endif; ?>

      <?php if ($data['summary']): ?>
        <div class="banner_text">
          <?= $data['summary']; ?>
        </div>
      <?php endif; ?>

      <?php if ($data['btn_title'] && $data['btn_url']): ?>
        <div class="banner_button">
          <a class="button" href="<?= $data['btn_url']; ?>">
            <?= $data['btn_title']; ?>
          </a>
        </div><!-- /.banner_button -->
      <?php endif; ?>
    </div>

    <?php if ($data['image']): ?>
      <div class="banner_image<?= $align_class; ?>">
        <img src="<?= $data['image']['sizes']['luca_banner_image']; ?>"
             alt="<?= $data['image']['alt']; ?>">
      </div>
    <?php endif; ?>

    <?php do_action($this->hook('block/after')); ?>

  </div>
</div><!-- /.banner -->
