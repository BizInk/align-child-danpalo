<div class="row">
  <div class="col-md-12">
    <h2 class="title"><?= $data['title']; ?></h2> 
    <div class="blogSlider js-blogSlider">
        <?php
          foreach ($data['posts'] as $post): 
        ?>

          <div class="blogSlider_slide">
            <div class="col-md-12">
              <div class="blog-title">
                <?= $post['title']; ?>
              </div>
              <div class="description">
                <?= wp_trim_words( $post['content'], 40, '...' ); ?>
              </div>
              <div class="link">
                <a href="<?= $post['permalink']; ?>">READ MORE</a>
              </div>
            </div>
          </div>

        <?php endforeach; ?>
      </div>
  </div>
</div>


