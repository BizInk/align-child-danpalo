<?php if (count($data['logos'])): ?>
<div class="section partners">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="title"><?= $data['title']; ?></h2>
        <div class="logosSlider js-logosSlider">
          <?php foreach ($data['logos'] as $logo): ?>
            <?php $this->render('blocks/default-single', $logo); ?>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </div>
</div>
<?php endif; ?>