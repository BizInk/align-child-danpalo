<?php if (count($data['testimonials'])): ?>

  <div id="<?= $this->block_id; ?>" class="<?= $data['modifier']; ?>">

    <?php do_action($this->hook('block/before')); ?>

    <?php if ($data['title'] || $data['summary']): ?>
      <div class="blockHeader">
        <h2 class="blockHeader_title"><?= $data['title']; ?></h2>
        <div class="sectionSummary">
          <?= $data['summary']; ?>
        </div>
      </div>
    <?php endif; ?>

    <div class="testimonialGrid row">
      <?php foreach ($data['testimonials'] as $testimonial):
        global $post;
        $post = $testimonial['post'];
        setup_postdata($post);
        ?>

        <div class="testimonialGrid_col col-sm-6 col-md-4 u-smartClear">
          <div class="quoteTile">
            <div class="quoteTile_quoteMark"></div>
            <?php if ($testimonial['link']): ?>
              <a href="<?= $testimonial['link'] ?>" target="_blank">
            <?php endif; ?>
            <?php if ($testimonial['image']): ?>
              <div class="quoteTile_image">
                <img src="<?= $testimonial['image']['url']; ?>" alt="<?= $testimonial['image']['alt']; ?>">
              </div>
            <?php endif; ?>
            <?php if ($testimonial['link']): ?>
              </a>
            <?php endif; ?>
            <div class="quoteTile_text" data-mh="quoteTile_text">
              <?= $testimonial['short_description']; ?>
              <?php if ($testimonial['long_description']): ?>
                <a class="quoteTile_readMore" href="<?= $testimonial['permalink']; ?>">
                  Read more
                </a>
              <?php endif; ?>
            </div>

            <div class="quoteTile_title">
              <?= $testimonial['person']; ?>
            </div>
            <div class="quoteTile_subtitle">
              <?php if ($testimonial['link']): ?>
                <a href="<?= $testimonial['link'] ?>" target="_blank">
              <?php endif; ?>
              <?= $testimonial['company']; ?>
              <?php if ($testimonial['link']): ?>
                </a>
              <?php endif; ?>
            </div>
          </div>
        </div>

        <?php wp_reset_postdata();

      endforeach; ?>
    </div>

    <?php do_action($this->hook('block/after')); ?>

  </div>

<?php endif; ?>
