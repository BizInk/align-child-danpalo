<article class="article">

  <?php do_action($this->hook('single/before')); ?>

  <div class="article_content">

    <?php if (has_post_thumbnail()): ?>
      <div class="article_image" style="background-image: url('<?= $data['image']['url']; ?>')"></div>
    <?php endif; ?>

    <div class="article_text u-editorContent">
      <?= $data['content']; ?>
    </div> <!-- /.article_text -->

  </div> <!-- /.article_content -->

  <?php do_action($this->hook('single/after')); ?>

</article><!-- /.article -->

<?php $author_id = get_the_author_meta('ID'); ?>

<div class="postAuthor">
  <div class="postAuthor_image">
    <?php if (get_field('post_author_image',  'user_'. $author_id)): ?>
      <img src="<?= get_field('post_author_image',  'user_'. $author_id)['url']; ?>">
    <?php else: ?>
      <?= get_avatar($author_id, 100); ?>
    <?php endif; ?>
  </div>
  <div class="postAuthor_main">
    <div class="postAuthor_title">
      <?= __('About the Author', 'luca'); ?>
    </div>
    <?php if (get_field('post_author_description',  'user_'. $author_id)): ?>
      <div class="postAuthor_text">
        <?= get_field('post_author_description', 'user_'. $author_id); ?>
      </div>
    <?php endif; ?>
  </div>
</div>

<div class="pageNav">
  <div class="pageNav_wrapper">
    <div class="pageNav_links">
      <?php previous_post_link('<span class="pageNav_previous">%link</span>', 'Previous Post'); ?>
      <?php next_post_link('<span class="pageNav_next">%link</span>', 'Next Post'); ?>
    </div> <!-- /.pageNav_links -->
  </div>
</div> <!-- /.pageNav -->
