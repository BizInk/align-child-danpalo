<?php if (count($data['packages'])): ?>

<div class="row">
  <div class="col-md-12">
      <div class="package-box row">
        <?php if ($data['title']): ?>
        <div class="col-md-12">
          <div class="pricing-title"><?= $data['title']; ?></div>
        </div>
        <?php endif; ?>
        <?php if ($data['summary']): ?>
        <div class="col-md-12">
          <div class="sub-text">
            <?= $data['summary']; ?>
          </div>
        </div>
        <?php endif; ?>
        <div class="main">
          <div class="col-md-12">
            <div class="sub-title">Accounting packages</div>
          </div>

          <?php foreach ($data['packages'] as $package):
            global $post;
            $post = $package['post'];
            setup_postdata($post);

            $this->render('default-single', $package);
            wp_reset_postdata();

          endforeach; ?>
          <?php if ($data['summary_after']): ?>
            <div class="col-md-12">
              <div class="bottom-text">
                <?= $data['summary_after']; ?>
              </div>
            </div>
          <?php endif; ?>
        </div>
      </div>
  </div>

</div>

<?php endif; ?>


