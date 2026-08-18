<?php if ($data['types']): ?>
    <?php foreach ($data['types'] as $type): ?>
        <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12 dark">
          <a href="<?= $type['permalink']; ?>">
            <div class="service-box">
              <div class="title"><?= $type['name']; ?></div>
              <div class="icon">
                  <svg class="u-scalingSvg_icon">
                    <use xlink:href="#<?= get_field('icon', $type['term']->taxonomy . '_' . $type['id']); ?>"></use>
                  </svg>
              </div>
            </div>
          </a>
        </div>

    <?php endforeach; ?>
<?php endif; ?>