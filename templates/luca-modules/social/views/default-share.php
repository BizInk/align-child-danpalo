<div class="shareIcons">

  <a href="<?= $data['facebook_share_url']; ?>"
     class="socialLink socialLink-facebook"
     title="<?= __('Share on Facebook', 'bizink'); ?>"
     target="_blank"
  >
    <div class="socialLink_icon">
      <div class="u-scalingSvg">
        <svg class="u-scalingSvg_shape">
          <use xlink:href="#shape-facebook-2"/>
        </svg>
      </div>
    </div>
    <span class="socialLink_text">
      <?= __('Share', 'bizink'); ?>
    </span>
  </a><!-- /.socialLink -->

  <a href="<?= $data['twitter_share_url']; ?>"
     class="socialLink socialLink-twitter"
     title="<?= __('Share on Twitter', 'bizink'); ?>"
     target="_blank"
  >
    <div class="socialLink_icon">
      <div class="u-scalingSvg">
        <svg class="u-scalingSvg_shape">
          <use xlink:href="#shape-twitter"/>
        </svg>
      </div>
    </div>
    <span class="socialLink_text">
      <?= __('Tweet', 'bizink'); ?>
    </span>
  </a><!-- /.socialLink -->

  <a href="<?= $data['linkedin_share_url']; ?>"
     class="socialLink socialLink-linkedin"
     title="<?= __('Share on LinkedIn', 'bizink'); ?>"
     target="_blank"
  >
    <div class="socialLink_icon">
      <div class="u-scalingSvg">
        <svg class="u-scalingSvg_shape">
          <use xlink:href="#shape-linkedin"/>
        </svg>
      </div>
    </div>
  </a> <!-- /.socialLink -->

</div>
