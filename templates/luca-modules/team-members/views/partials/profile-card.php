<div class="profileCard">
  <?php do_action($this->hook('single/before')); ?>

  <div class="profileCard_imageWrap">

    <?php if (isset($data['args']['show_links']) && $data['args']['show_links']): ?>
      <a href="<?= $data['permalink']; ?>" class="profileCard_image" style="<?php if ($data['image']): ?>background-image: url('<?= $data['image']['url']; ?>')<?php endif; ?>">
      </a>
    <?php else: ?>
      <div class="profileCard_image" style="<?php if ($data['image']): ?>background-image: url('<?= $data['image']['url']; ?>')<?php endif; ?>">
      </div>
    <?php endif; ?>


  </div> <!-- /.profileCard_imageWrap -->

  <div class="profileCard_content">

    <h3 class="profileCard_title">

      <?php if (isset($data['args']['show_links']) && $data['args']['show_links']): ?>
        <a href="<?= $data['permalink']; ?>">
      <?php endif; ?>

      <?= $data['title']; ?>

      <?php if (isset($data['args']['show_links']) && $data['args']['show_links']): ?>
        </a>
      <?php endif; ?>

    </h3>

    <?php if ($data['position']): ?>
      <div class="profileCard_position"><?=  $data['position']; ?></div>
    <?php endif; ?>

    <div class="profileCard_info">

      <?php if ($data['email']): ?>
        <a href="mailto:<?= $data['email']; ?>" class="profileCard_icon">
          <div class="u-scalingSvg" style="padding-bottom: 88%;">
            <svg class="u-scalingSvg_shape">
              <use xlink:href="#shape-envelope" />
            </svg>
          </div>
        </a>
      <?php endif; ?>

      <?php if ($data['linkedin']): ?>
        <a class="profileCard_icon" href="<?= $data['linkedin']; ?>">
          <div class="u-scalingSvg" style="padding-bottom: 88%;">
            <svg class="u-scalingSvg_shape">
              <use xlink:href="#shape-linkedin" />
            </svg>
          </div>
        </a>
      <?php endif; ?>

      <?php if ($data['twitter']): ?>
        <a class="profileCard_icon" href="<?= $data['twitter']; ?>">
          <div class="u-scalingSvg" style="padding-bottom: 88%;">
            <svg class="u-scalingSvg_shape">
              <use xlink:href="#shape-twitter" />
            </svg>
          </div>
        </a>
      <?php endif; ?>

      <?php if ($data['facebook']): ?>
        <a class="profileCard_icon" href="<?= $data['facebook']; ?>">
          <div class="u-scalingSvg" style="padding-bottom: 88%;">
            <svg class="u-scalingSvg_shape">
              <use xlink:href="#shape-facebook" />
            </svg>
          </div>
        </a>
      <?php endif; ?>

      <?php if ($data['google_plus']): ?>
        <a class="profileCard_icon" href="<?= $data['google_plus']; ?>">
          <div class="u-scalingSvg" style="padding-bottom: 90%;">
            <svg class="u-scalingSvg_shape">
              <use xlink:href="#shape-google" />
            </svg>
          </div>
        </a>
      <?php endif; ?>

    </div> <!-- /.profileCard_info -->


    <?php if ($data['phone']): ?>
      <div class="profileCard_phone">
          <?= $data['phone']; ?>
      </div> <!-- /.profileCard_phone -->
    <?php endif; ?>


    <?php if (isset($data['args']['show_links']) && $data['args']['show_links']): ?>
      <div class="profileCard_footer">
        <a href="<?= $data['permalink']; ?>" class="profileCard_link">Full profile &raquo;</a>
      </div>
    <?php endif; ?>

  </div> <!-- /.profileCard_content -->

  <?php do_action($this->hook('single/after')); ?>
</div> <!-- /.profileCard -->
