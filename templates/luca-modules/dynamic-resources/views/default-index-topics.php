<?php if ($data['topics']): ?>

    <?php foreach ($data['topics'] as $topic): ?>
      <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
        <a href="<?= $topic['permalink']; ?>">
          <div class="service-box">
            <div class="title"><?= $topic['name']; ?></div>
            <div class="icon">
               <?php if ($topic['icon']): ?>
              <svg class="u-scalingSvg_icon">
                <use xlink:href="#<?= $topic['icon']; ?>"></use>
              </svg>
              <?php endif; ?>
            </div>
          </div>
        </a>
      </div>

    <?php endforeach; ?>

<?php endif; ?>