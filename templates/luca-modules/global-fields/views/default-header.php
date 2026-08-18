

<div class="section top-header-home" style="background-image: url('<?= !empty(get_field('featured_image')['url']) ? get_field('featured_image')['url'] : get_field('featured_image_default',  'option')['url'] ; ?>');">
    <?php do_action($this->hook('header/navbar/content')); ?>
    <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="header-title">
          <?php if(!empty(get_field('front_featured_title'))): ?>
            <?= get_field('front_featured_title'); ?>
          <?php elseif(!empty(single_post_title())) : ?>
            <?= get_the_title(); ?>
          <?php endif; ?>
        </div>
        <?php if(!empty(get_field('front_featured_title'))): ?>
        <div class="header-sub">
          <?= get_field('front_featured_content'); ?>
        </div>
          <?php if(get_field('show_button')): ?>
            <div class="header-button">
              <?php $target = get_field('button_link')['target'] ? get_field('button_link')['target'] : '_self';  ?>
              <a href="<?= get_field('button_link')['url']; ?>" target="<?= $target; ?>" class="button button-white"><?= get_field('button_link')['title']; ?></a>
            </div>
          <?php endif; ?>
        <?php endif; ?>
      </div>
    </div>
  </div>
  <?php if(!empty(get_field('front_featured_title'))): ?>
  <div class="scroll">
    <a href="#"><div class="scroll-arrow"></div></a>
  </div>
  <?php endif; ?>
</div>
