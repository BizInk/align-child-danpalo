<?php if (count($data['posts'])): ?>

<div class="section blog-list">
	<div class="container">
		<?php foreach ($data['posts'] as $post): ?>
	      <?php $this->render('default-single-list', $post); ?>
	    <?php endforeach; ?>
	</div>
	<div class="pagination">
    <?= $data['pagination']; ?>
  </div>
</div>

<?php endif; ?>
