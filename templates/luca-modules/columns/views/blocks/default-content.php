<?php if (count($data['columns'])): ?>
  <?php if ($data['title'] || $data['summary']): ?>
        <div class="row">
          <div class="col-md-12">
            <?php if ($data['title'] || $data['summary']): ?>
              <h2 class="title"><?= $data['title']; ?></h2>
            <?php endif; ?>
            <?php if ($data['summary']): ?>
              <div class="description">
                <?= $data['summary']; ?>
              </div>
            <?php endif; ?>
          </div>
        </div>
        <?php endif; ?>
      </div>
    </div>
  
<div class="section our-services-content" style="background-image: url(<?= get_field('col_bg')['url']; ?>);background-size: cover;">
  <div class="container boxes">
    <div class="row">
      <div class="col-md-12">
        <?php foreach ($data['columns'] as $column): ?>
        <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
          <div class="service-box">
           <?php if ($column['title']): ?>
            <div class="title"><?= $column['title']; ?></div>
            <?php endif; ?>
            <?php if ($column['content']): ?>
            <div class="description">
              <?= $column['content']; ?>
            </div>
            <?php endif; ?>
            <?php if ($column['btn_title'] && $column['btn_url']): ?>
            <div class="link">
              <a href="<?= $column['btn_url']; ?>"><?= $column['btn_title']; ?></a>
            </div>
            <?php endif; ?>
          </div>
        </div>
        <?php endforeach; ?>
      </div>
    </div>

<?php endif; ?>