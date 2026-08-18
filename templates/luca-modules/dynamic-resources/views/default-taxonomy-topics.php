<?php if ($data['types']): ?>
  
<div class="row">
  <div class="col-md-12">
    <div class="taxonomy-content">
      <h2 class="main-title"><?= $data['topic']['name']; ?></h2>
        <?php foreach ($data['types'] as $type): ?>
          <?php if (count($type['posts'])): ?>
            <a href="<?= $type['permalink']; ?>"><div class="tax-title"><?= $type['name']; ?></div></a>
            <ul class="items">
              <?php foreach ($type['posts'] as $post): ?>
              <li><a href="<?= $post['permalink']; ?>" title="<?= $post['title']; ?>"><?= $post['title']; ?></a></li>
              <?php endforeach; ?>
            </ul>
          <?php endif; ?>
        <?php endforeach; ?>
      <div class="contact-button">
        <a href="#" class="button button-green">Contact us</a>
      </div>
    </div>
  </div>
</div>


<?php endif; ?>


