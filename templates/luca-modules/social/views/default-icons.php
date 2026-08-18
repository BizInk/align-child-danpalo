<div class="socialIcons">
<div style="
    display: inline-block;
    font-family: 'Muli-Bold';
    font-size: 18px;
    line-height: 28px;
    color: #ffffff;margin-right: 20px;
">Follow us on: </div>
  <div class="socialIcons_layout">

    <?php if ($data['facebook']): ?>
      <a href="<?= $data['facebook']; ?>" class="socialIcons_icon socialIcons_icon-fb facebook" target="_blank">
        &nbsp;
      </a>
    <?php endif; ?>

    <?php if ($data['twitter']): ?>
      <a href="<?= $data['twitter']; ?>" class="socialIcons_icon socialIcons_icon-twitter twitter" target="_blank">
        &nbsp;
      </a>
    <?php endif; ?>

    <?php if ($data['google_plus']): ?>
      <a href="<?= $data['google_plus']; ?>" class="socialIcons_icon socialIcons_icon-google" target="_blank">
        <div class="u-scalingSvg">
          <svg class="u-scalingSvg_shape">
            <use xlink:href="#shape-google" />
          </svg>
        </div>
      </a>
    <?php endif; ?>

    <?php if ($data['linkedin']): ?>
      <a href="<?= $data['linkedin']; ?>" class="socialIcons_icon socialIcons_icon-linkedin" target="_blank">
        <div class="u-scalingSvg">
          <svg class="u-scalingSvg_shape">
            <use xlink:href="#shape-linkedin" />
          </svg>
        </div>
      </a>
    <?php endif; ?>
    
    <?php if ($data['instagram']): ?>
    <a href="<?= $data['instagram']; ?>" class="socialIcons_icon socialIcons_icon-instagram instagram" target="_blank">
      &nbsp;
    </a>
    <?php endif; ?>
    
    <?php if ($data['youtube']): ?>
    <a href="<?= $data['youtube']; ?>" class="socialIcons_icon socialIcons_icon-youtube" target="_blank">
      <div class="u-scalingSvg">
        <svg class="u-scalingSvg_shape">
          <use xlink:href="#shape-youtube" />
        </svg>
      </div>
    </a>
    <?php endif; ?>

  </div>

</div>
