<div class="row blog-item">
  <div class="col-md-4">
    <div class="postPreview_imageWrap">
        <a class="postPreview_image"
           title="<?= $data['title']; ?>"
           href="<?= $data['permalink']; ?>"
           style="<?php if ($data['image']): ?>background-image: url('<?= $data['image']['url']; ?>')<?php endif; ?>">
        </a><!-- /.postPreview_image -->
      </div><!-- /.postPreview_imageWrap -->
  </div>
  <div class="col-md-7 details">
    <div class="head">
      <?php foreach ($data['categories'] as $i => $category): ?><a href="<?= $category['permalink']; ?>"><?= $category['name']; ?></a><?php if ($i + 1 != count($data['categories'])): ?>,&nbsp;<?php endif; ?><?php endforeach; ?>
    </div>
    <div class="title">
      <a href="<?= $data['permalink']; ?>">
        <?= $data['title']; ?>
      </a>
    </div>
    <div class="description">
       <?= wp_trim_words($data['excerpt'], 20); ?>
    </div>
    <div class="location-date">
      <?= $data['author']; ?>  |  <?php $this->render('partials/postmeta', $data); ?>
    </div>
  </div>
</div>