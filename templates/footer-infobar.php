<?php if (get_field('footer_infobar_form', 'option')): ?>

  <div class="infoBar"
       <?php if (get_field('footer_infobar_image', 'option')): ?>style="background-image: url('<?= \Luca\Theme\Utils\get_acf_image(get_field('footer_infobar_image', 'option'), 'luca_foto_footer_infobar'); ?>')"<?php endif; ?>>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2 class="infoBar_title">
            <?= get_field('footer_infobar_title', 'option'); ?>
          </h2>
          <div class="infoBar_intro">
            <?= get_field('footer_infobar_text', 'option'); ?>
          </div>
        </div>
        <div class="col-md-6">
          <div class="infoBar_form gForm">
            <?php
            $form_object = get_field('footer_infobar_form', 'option');
            gravity_form_enqueue_scripts($form_object['id'], true);
            gravity_form($form_object['id'], false, false, false, '', true, 35989642);
            ?>
          </div>
        </div>
      </div>

    </div>

  </div> <!-- /.infoBar -->

<?php endif; ?>
