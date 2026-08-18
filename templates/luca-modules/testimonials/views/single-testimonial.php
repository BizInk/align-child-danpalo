<div class="quoteTile">
  <div class="quoteTile_quoteMark"></div>
  <?php if ($data['link']): ?>
    <a href="<?= $data['link'] ?>" target="_blank">
  <?php endif; ?>
    <?php if ($data['image']): ?>
      <div class="quoteTile_image">
        <img src="<?= $data['image']['url']; ?>"
             alt="<?= $data['image']['alt']; ?>">
      </div>
    <?php endif; ?>
  <?php if ($data['link']): ?>
    </a>
  <?php endif; ?>
  <div class="quoteTile_title">
    <?= $data['person']; ?>
  </div>
  <div class="quoteTile_subtitle">
    <?php if ($data['link']): ?>
      <a href="<?= $data['link'] ?>" target="_blank">
    <?php endif; ?>
    <?= $data['company']; ?>
    <?php if ($data['link']): ?>
      </a>
    <?php endif; ?>
  </div>
  <div class="quoteTile_text">
    <?php if ($data['long_description']): ?>
      <?= $data['long_description']; ?>
    <?php endif; ?>
  </div>
</div>
