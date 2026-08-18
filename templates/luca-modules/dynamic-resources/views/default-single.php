<article class="article article-col article-full">

  <?php do_action($this->hook('single/before')); ?>

  <div class="article_col article_col-padded article_col-table">

    <div class="article_colCell">

      <h3 class="article_title">
        <?= $data['title']; ?>
      </h3><!-- /.article_title -->

      <div class="contentSeparator"></div>

    </div><!-- /.article_colCell -->

  </div><!-- /.article_col -->

  <div class="article_content">
    <?= $data['content']; ?>
  </div>

  <?php do_action($this->hook('single/after')); ?>

</article><!-- /.article -->
