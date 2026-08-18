<?php if ($data['topics']): ?>
  
<div class="row">
  <div class="col-md-12">
    <div class="taxonomy-content">
      <h2 class="main-title"><?= $data['type']['name']; ?></h2>
        <?php foreach ($data['topics'] as $topic): ?>
          <?php if (count($topic['posts'])): ?>
            <a href="<?= $topic['permalink']; ?>"><div class="tax-title"><?= $topic['name']; ?></div></a>
            <ul class="items">
              <?php foreach ($topic['posts'] as $post): ?>
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