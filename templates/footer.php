<div class="section footer-logo">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="logo" style="background-image: url('<?= get_field('footer_logo', 'option'); ?>');"></div>
      </div>
    </div>
  </div>
</div>
<div class="section footer">
  <div class="container">
    <div class="row">
      <div class="col-md-12 footer-form">
         <?php
              $form_object = get_field('footer_mainform', 'option');
              gravity_form_enqueue_scripts($form_object['id'], true);
              gravity_form($form_object['id'], true, true, false, '', true, 87136823681);
              ?>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 center">
        <div class="phone"><?= get_field('contact_phone', 'option'); ?></div>
        <div class="email"><?= get_field('contact_email', 'option'); ?></div>
        <div class="address"><?= get_field('contact_address', 'option'); ?></div>
      </div>
      <div class="col-md-12 center">
        <div class="footer-text">
         
 <?php
                if (has_nav_menu('footer_navigation')) :
                  wp_nav_menu(['theme_location' => 'footer_navigation', 'menu_class' => 'navList navList-footer']);
                endif;
               ?>
        </div>
      </div>
      <div class="col-md-12">
        <!-- <div class="form-label">Sign up to receive news and updates</div> -->
        <div class="form-field newsletter">
          <!-- <input type="text" name="" placeholder="EMAIL ADDRESS"> -->
          <?php
              $form_object = get_field('footer_form', 'option');
              gravity_form_enqueue_scripts($form_object['id'], true);
              gravity_form($form_object['id'], true, true, false, '', true, 87136823681);
              ?>
        </div>
        
        <div class="social-icons center">
            <?php do_action('luca/theme/footer/social'); ?>
        </div>
      </div>
    </div>
  </div>
</div>

