<div class="col-md-4">
  <div class="popular">
    <?php if (get_field('package_popular')): ?>
    POPULAR
    <?php endif; ?>
  </div>
  <div class="title"><?= $data['title']; ?></div>
  <?php $symbol = ""; ?>
  <?php if (get_field('currency', 'option') === 'GBP'): ?>
    <?php $symbol = '£'; ?>
  <?php elseif (get_field('currency', 'option') === 'EUR'): ?>
    <?php $symbol = '€'; ?>
  <?php elseif (get_field('currency', 'option') === 'RAND'): ?>
    <?php $symbol = 'R'; ?>
  <?php else: ?>
    <?php $symbol = '$'; ?>
  <?php endif; ?>
  <div class="price"><span class="symbol"><?= $symbol; ?></span><?= $data['price'] ?></div>
  <div class="per">
  <?php if (empty($data['label_per_period'])): // support for deprecated functionality ?>
    <?php if ($data['label_per_month']): ?>
      <?php _e('per month', 'luca'); ?>
    <?php endif; ?>
    <?php if ($data['label_per_year']): ?>
      <?php _e('per year', 'luca'); ?>
    <?php endif; ?>
  <?php else: ?>
    <?php if ('per_day' === $data['label_per_period']): ?>
      <?php _e('per day', 'luca'); ?>
    <?php elseif ('per_week' === $data['label_per_period']): ?>
      <?php _e('per week', 'luca'); ?>
    <?php elseif ('per_month' === $data['label_per_period']): ?>
      <?php _e('per month', 'luca'); ?>
    <?php elseif ('per_year' === $data['label_per_period']): ?>
      <?php _e('per year', 'luca'); ?>
    <?php endif; ?>
  <?php endif; ?>
  <?php if ($data['label_gst']): ?>
    <?php if (in_array(get_field('region', 'option'), ['au', 'nz'])): ?>
        <?php _e('plus GST', 'luca'); ?>
    <?php elseif (in_array(get_field('region', 'option'), ['uk'])): ?>
        <?php _e('plus VAT', 'luca'); ?>
    <?php endif; ?>
  <?php endif; ?>
  </div>
  <?php if ($data['summary']): ?>
  <div class="description">
    <?= $data['summary']; ?>
  </div>
  <?php endif; ?>
  <div class="details">
    <ul>
      <?php foreach ($data['features'] as $feature): ?>
      <li><?= $feature['feature']; ?></li>
      <?php endforeach; ?>
    </ul>
  </div>
  <?php if ($data['btn_label'] && $data['btn_url']): ?>
  <div class="link">
    <a href="<?= $data['btn_url']; ?>" title="<?= $data['btn_label']; ?>" class="button button-green"><?= $data['btn_label']; ?></a>
  </div>
  <?php endif; ?>
</div>