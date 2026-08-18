<?php if (count($data['members'])): ?>

  <div id="<?= $this->block_id; ?>" class="members <?= $data['modifier']; ?>">

    <?php do_action($this->hook('block/before')); ?>

    <?php if (get_field('team_page_intro_title') || get_field('team_page_intro_text')): ?>
      <div class="sideGrid">
        <div class="sideGrid_side">
          <h2 class="sideGrid_title">
            <?= get_field('team_page_intro_title'); ?>
          </h2>
          <?php if (get_field('team_page_intro_text')): ?>
            <div class="sideGrid_intro">
              <?= get_field('team_page_intro_text'); ?>
            </div>
          <?php endif; ?>
        </div>
        <div class="sideGrid_main">
          <?= get_post_field('post_content', $post->ID); ?>
        </div>
      </div>
    <?php endif; ?>

    <div class="sideGrid">
      <div class="sideGrid_side">
        <h2 class="sideGrid_title">
          <?= get_field('team_page_members_title'); ?>
        </h2>
        <?php if (get_field('team_page_members_text')): ?>
          <div class="sideGrid_intro">
            <?= get_field('team_page_members_text'); ?>
          </div>
        <?php endif; ?>
      </div>
      <div class="sideGrid_main">
        <div class="row">
          <?php foreach ($data['members'] as $member): ?>
            <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 u-smartClear col-verticalSpacing">
              <?php $this->render('partials/profile-card', $member, ['show_links' => true]); ?>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>

    <?php do_action($this->hook('block/after')); ?>

  </div> <!-- /.members -->

<?php endif; ?>
