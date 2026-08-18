<div class="sticky-header-container">
<div class="container header">
    <div class="row">
      <div class="col-md-4 col-md-offset-8">
        <ul class="top-menu">
          <li><a href="tel:<?=get_field('contact_phone', 'option'); ?>"><?=get_field('contact_phone', 'option'); ?></a></li>
          <?php if ($data['menus']['client_area']): ?>
          <li><a class="dropdown-toggle"
                            type="button"
                            data-toggle="dropdown">
                      <?=$data['menus']['client_area_title']; ?>
                    </a>
                    <?=$data['menus']['client_area']; ?></li>
<?php
endif; ?>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-md-5">
        <div class="menu-list">
        <?=wp_nav_menu(array(
    'theme_location' => 'header_navigation'
)); ?>
        </div>
      </div>
      <div class="col-md-2">
        <a href="<?=esc_url(home_url('/')); ?>">
			<?php
				if (get_field('field__logo_white__luca_logo', 'option')):
			?>
				<div class="main-logo" style="background-image: url('<?=get_field('field__logo_white__luca_logo', 'option') ['url']; ?>');height:<?=get_field('logo_height_desktop', 'options'); ?>em"></div>
			<?php
			else:
			?>
				<div class="main-logo" style="background-image: url('<?=$data['logo']['url']; ?>');height:<?=get_field('logo_height_desktop', 'options'); ?>em"></div>
			<?php
			endif;
			?>
        </a>
      </div>
      <div class="col-md-5">
        <div class="menu-list right">
        <?=wp_nav_menu(array(
    'theme_location' => 'main_nav_2'
)); ?>
        </div>
      </div>
    </div>
  </div>
<?php
$has_social = false;
if (get_field('field__facebook__luca_social', 'options') || get_field('field__twitter__luca_social', 'options') || get_field('field__google_plus__luca_social', 'options') || get_field('field__linkedin__luca_social', 'options') || get_field('field__instagram__luca_social', 'options') || get_field('field__youtube__luca_social', 'options'))
{
    $has_social = true;
}
?>

<div class="navBar">
  <div class="navBar_container">
    <div class="navBar_header navBar_section-header">
      <a href="<?=esc_url(home_url('/')); ?>"
         class="navBar_brand<?php if (get_field('field__logo_white__luca_logo', 'option')): ?> white<?php
endif; ?>">

        <img class="navBar_logo"
             src="<?=$data['logo']['url']; ?>"
             alt="<?=$data['logo']['alt']; ?>">

        <?php if (get_field('field__logo_white__luca_logo', 'option')): ?>
          <img class="navBar_logo navBar_logo-white"
               src="<?=get_field('field__logo_white__luca_logo', 'option') ['url']; ?>"
               alt="<?=$data['logo']['alt']; ?>">
        <?php
endif; ?>

      </a>

      <div class="navBar_menuToggle">
        <a href="#mainNavBar" class="burger burger-animated" data-toggle="collapse" aria-expanded="false"
           aria-controls="mainNavBar">
          <span class="sr-only">Toggle navigation</span>
          <span class="burger_bar"></span>
          <span class="burger_bar"></span>
          <span class="burger_bar"></span>
        </a>

        <?php if (get_field('contact_phone', 'option')): ?>
          <a href="tel:<?=get_field('contact_phone', 'option'); ?>"
             class="navBar_phone">
            <div class="topBar_icon">
              <div class="u-scalingSvg">
                <svg class="u-scalingSvg_shape">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink"
                       xlink:href="#shape-telephone"></use>
                </svg>
              </div>
            </div><!-- /.topBar_icon -->
            <?=get_field('contact_phone', 'option'); ?>
          </a>
        <?php
endif; ?>

      </div>
    </div><!-- /.navBar_header -->

    <?php if ($data['menus']['header']): ?>

      <div id="mainNavBar" class="navBar_menu collapse">

        <div class="topBar">
          <div class="topBar_content">

            <?php if (get_field('contact_phone', 'option')): ?>
              <a href="tel:<?=get_field('contact_phone', 'option'); ?>"
                 class="topBar_item topBar_item-phone">
              <div class="topBar_icon">
                <div class="u-scalingSvg">
                  <svg class="u-scalingSvg_shape">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink"
                         xlink:href="#shape-telephone"></use>
                  </svg>
                </div>
              </div><!-- /.topBar_icon -->
              <?=get_field('contact_phone', 'option'); ?>
            </a>
            <?php
    endif; ?>

            <?php if ($data['menus']['client_area']): ?>
              <div class="topBar_item">
                <div class="dropButton">
                  <div class="dropdown">
                    <button class="dropButton_button dropdown-toggle"
                            type="button"
                            data-toggle="dropdown">
                      <?=$data['menus']['client_area_title']; ?>
                    </button>
                    <?=$data['menus']['client_area']; ?>
                  </div><!-- /.dropdown -->
                </div><!-- /.dropButton -->
              </div><!-- /.topBar_button-->
            <?php
    endif; ?>

            <?php if ($has_social): ?>
              <div class="topBar_item">
                <?php do_action($this->hook('header/navbar/social')); ?>
              </div>
            <?php
    endif; ?>

          </div>
        </div><!-- /.topBar -->

        <div class="navBar_menuContainer navBar_section-mainMenu">
          <div class="mainMenu">
            <?=$data['menus']['header']; ?>
            <?=wp_nav_menu(array(
        'theme_location' => 'main_nav_2',
        'menu_class' => 'navList'
    )); ?>
          </div>
        </div>



      </div><!-- /.navBar_menu -->

    <?php
endif; ?>
  </div><!-- /.container -->

</div><!-- /.navBar -->
</div>
