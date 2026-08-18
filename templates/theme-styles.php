<?php
  $navbar_min_height_desktop .= 'em';
  $navbar_logo_height_desktop .= 'em';
  $navbar_min_height_mobile .= 'em';
  $navbar_logo_height_mobile .= 'em';

  // color brightness adjustmen
  function adjustBrightness($hex, $steps) {
    // Steps should be between -255 and 255. Negative = darker, positive = lighter
    $steps = max(-255, min(255, $steps));

    // Normalize into a six character long hex string
    $hex = str_replace('#', '', $hex);
    if (strlen($hex) == 3) {
        $hex = str_repeat(substr($hex,0,1), 2).str_repeat(substr($hex,1,1), 2).str_repeat(substr($hex,2,1), 2);
    }

    // Split into three parts: R, G and B
    $color_parts = str_split($hex, 2);
    $return = '#';

    foreach ($color_parts as $color) {
        $color   = hexdec($color); // Convert to decimal
        $color   = max(0,min(255,$color + $steps)); // Adjust color
        $return .= str_pad(dechex($color), 2, '0', STR_PAD_LEFT); // Make two char hex code
    }
    return $return;
  }
?>

<style>
  a {
    color: <?= $brand_primary_color ?>;
  }
  a:focus {
    outline: thin dotted <?= $brand_primary_color ?>;
  }
  .themeColor-brandPrimary {
    color: <?= $brand_primary_color ?>;
  }
  .themeColor-brandSecondary {
    color: <?= $brand_secondary_color ?>;
  }
  /* blogBox */
  .blogBox_bg {
    background-color: <?= $brand_primary_color ?>;
  }
  /* .button */
  .button {
    background-color: <?= $brand_primary_color ?>;
    border-color: <?= $brand_primary_color ?>;
  }
  .button:hover,
  .button:focus {
    background-color: <?= adjustBrightness($brand_primary_color, -50) ?>;
    border-color: <?= adjustBrightness($brand_primary_color, -50) ?>;
  }
  .button-secondary {
    background-color: <?= $brand_secondary_color ?>;
    border-color: <?= $brand_secondary_color ?>;
  }
  .button-secondary:hover,
  .button-secondary:focus {
    background-color: <?= adjustBrightness($brand_secondary_color, -50) ?>;
    border-color: <?= adjustBrightness($brand_secondary_color, -50) ?>;
  }
  /* .catMenu */
  .active > .catMenu_link {
    background: <?= $brand_primary_color ?>;
  }
  .catMenu_link:hover,
  .catMenu_link:focus {
  color: <?= $brand_primary_color ?>;
  }
  /*.collapseBlock*/
  .collapseBlock_header {
    background-color: <?= $brand_primary_color ?>;
  }
  .collapseBlock_header:hover,
  .collapseBlock_header:focus {
    background-color: <?= $brand_secondary_color ?>;
  }
  /* dropButton */
  .dropButton .dropdown-menu {
    background-color: <?= $brand_secondary_color ?>;
  }
  .dropButton .dropdown-menu:before {
    border-bottom-color: <?= $brand_secondary_color ?>;
  }
  @media (max-width: 1199px) {
    .dropButton_button {
      background-color: <?= $brand_primary_color ?>;
    }
    .dropButton_button:hover,
    .dropButton_button:focus {
      background-color: <?= adjustBrightness($brand_primary_color, -10) ?>;
    }
  }
  /* gForm */
  .gForm .gform_wrapper .gform_footer input.button {
    background-color: <?= $brand_secondary_color ?>;
    border-color: <?= $brand_secondary_color ?>;
  }
  .gForm .gform_wrapper .gform_footer input.button:hover,
  .gForm .gform_wrapper .gform_footer input.button:focus {
    background-color: <?= adjustBrightness($brand_secondary_color, -15) ?>;
    border-color: <?= adjustBrightness($brand_secondary_color, -15) ?>;
  }
  /* headerBackground */
  .headerBackground {
    background-color: <?= $brand_primary_color ?>;
  }
  /* .iconTile */
  .iconTile_icon {
    fill: <?= $brand_primary_color ?>;
  }
  .iconTile_button {
    background-color: <?= $brand_primary_color ?>;
    border-color: <?= $brand_primary_color ?>;
  }
  .iconTile_button:hover,
  .iconTile_button:focus {
    fill: <?= $brand_secondary_color ?>;
    background-color: <?= adjustBrightness($brand_primary_color, -50) ?>;
    border-color: <?= adjustBrightness($brand_primary_color, -50) ?>;
  }
  .iconTile-link:hover,
  .iconTile-link:focus {
    background: <?= $brand_secondary_color ?>;
  }
  /* infoBar */
  .infoBar {
    background-color: <?= $brand_primary_color ?>;
  }
  /* infoBlock */
  .infoBlock_item-link:hover,
  .infoBlock_item-link:focus {
    color: <?= $brand_secondary_color ?>;
  }
  /* .mainMenu */
  .mainMenu .active > a,
  .mainMenu .current-menu-ancestor > a,
  .mainMenu a:hover,
  .mainMenu a:focus {
    color: <?= $brand_primary_color ?>;
  }
  .mainMenu .sub-menu {
    background-color: <?= $brand_secondary_color ?>;
  }
  .mainMenu .sub-menu:before {
    border-bottom-color: <?= $brand_secondary_color ?>;
  }
  .mainMenu .dropdown.open {
    background-color: <?= $brand_secondary_color ?>;
  }
  @media (min-width: 1200px) {
    .mainMenu .active > a,
    .mainMenu .current-menu-ancestor > a,
    .mainMenu .dropdown.open > a,
    .mainMenu a:hover,
    .mainMenu a:focus {
      color: <?= $brand_secondary_color ?>;
    }
    .mainMenu .sub-menu {
      background-color: <?= $brand_secondary_color ?>;
    }
    .mainMenu .sub-menu:before {
      border-bottom-color: <?= $brand_secondary_color ?>;
    }
    .mainMenu .dropdown.open {
      background: none;
    }
  }
  /* .navbar */
  .navBar_brand img {
    height: <?= $navbar_logo_height_mobile ?>;
  }
  .navBar_brand,
  .navBar_menuToggle {
    height: <?= $navbar_min_height_mobile ?>;
  }
  @media (min-width: 1200px) {
    .navBar_header,
    .navBar_menu {
      height: <?= $navbar_min_height_desktop ?>;
    }
    .navBar_brand {
      height: auto;
    }
    .navBar_brand img {
      height: <?= $navbar_logo_height_desktop ?>;
    }
  }
  /* .pageNav */
  .pageNav_links a:hover,
  .pageNav_links a:focus {
    color: <?= $brand_primary_color ?>;
  }
  .pageNav_previous:before,
  .pageNav_next:before {
    background-color: <?= $brand_secondary_color ?>;
  }
  /* .pagination */
  .pagination a:hover,
  .pagination a:focus {
    color: <?= $brand_primary_color ?>;
  }
  .pagination > .current {
    background: <?= $brand_primary_color ?>;
  }
  /* .panel */
  .panel_button {
    background-color: <?= $brand_primary_color ?>;
  }
  .panel_button:hover,
  .panel_button:focus {
    background-color: <?= adjustBrightness($brand_primary_color, -50) ?>;
  }
  .packageGrid_col:nth-child(2) .panel_header {
    background-color: <?= $brand_secondary_color ?>;
  }
  /* .plainMenu */
  .plainMenu a:hover,
  .plainMenu a:focus {
    color: <?= $brand_primary_color ?>;
  }
  /* .postMeta */
  .postMeta_author span,
  .postMeta_category a {
    color: <?= $brand_primary_color ?>;
  }
  .postMeta_category a:hover,
  .postMeta_category a:focus {
    color: <?= adjustBrightness($brand_primary_color, -70) ?>;
  }
  /* .postPreview */
  .postPreview_title a:hover,
  .postPreview_title a:focus {
    color: <?= $brand_primary_color ?>;
  }
  .postPreview_excerpt a {
    color: <?= $brand_primary_color ?>;
  }
  .postPreview_excerpt a:hover,
  .postPreview_excerpt a:focus {
    color: <?= adjustBrightness($brand_primary_color, -70) ?>;
  }
  /* .profileCard */
  .profileCard_title a:hover,
  .profileCard_title a:focus {
    color: <?= $brand_primary_color ?>;
  }
  .profileCard_icon:hover,
  .profileCard_icon:focus {
    fill: <?= $brand_primary_color ?>;
  }
  .profileCard_nav:hover,
  .profileCard_nav:focus {
    color: <?= $brand_secondary_color ?>;
  }
  .profileCard_position {
    color: <?= $brand_primary_color ?>;
  }
  /* sideGrid */
  .sideGrid_title:after {
    background-color: <?= $brand_secondary_color ?>;
  }
  /* .socialIcons */
  .contentInfo_social .socialIcons_icon {
    fill: <?= $brand_primary_color ?>;
  }
  .socialIcons_icon:hover,
  .socialIcons_icon:focus {
    fill: <?= $brand_secondary_color ?>;
  }
  /* testimonialSlider */
  .testimonialSlider_image {
    border-color: <?= $brand_primary_color ?>;
  }
  .testimonialSlider_quote:before {
    color: <?= $brand_primary_color ?>;
  }
  /* topBar */
  a.topBar_item:hover,
  a.topBar_item:hover {
    color: <?= $brand_secondary_color ?>;
  }
  /* widget */
  .widget + .widget {
    border-color: <?= $brand_secondary_color ?>;
  }
  /* themeTable */
  .themeTable th {
    background-color: <?= $brand_primary_color ?>;
  }
  /* componentList */
  .componentList_featured {
    background-color: <?= $brand_primary_color ?>;
  }
  .componentList_featured:hover,
  .componentList_featured:focus {
    background-color: <?= $brand_secondary_color ?>;
  }

  .button-green{
    background-color: <?= $brand_primary_color ?>;
  }

  .button-green:hover{
    background-color: <?= $brand_primary_color ?>;
  }

  .our-services-text .title{
    color: <?= $brand_primary_color ?>;
  }

  .our-services-content .service-box .title{
    color: <?= $brand_primary_color ?>;
  }

  .section.testimonials .title{
    color: <?= $brand_primary_color ?>;
    border-bottom: 2px solid <?= $brand_primary_color ?>;
  }

  .section.testimonials .name{
    color: <?= $brand_primary_color ?>;
  }

  .our-packages-text .title{
    color: <?= $brand_primary_color ?>;
  }

  .our-packages-content .package-box .popular{
    color: <?= $brand_primary_color ?>;
  }

  .section.blog-slider .title{
    color: <?= $brand_primary_color ?>;
    border-bottom: 2px solid <?= $brand_primary_color ?>;
  }

  .footer-logo{
    background-color: <?= $brand_primary_color ?>;
  }

  .footer input[type=text]{
    border: 1px solid <?= $brand_primary_color ?>;
  }

  .footer .phone{
    color: <?= $brand_primary_color ?>;
  }

  .form-field.newsletter .gform_button{
    background-color: <?= $brand_primary_color ?>;
  }

  .footer-form .gform_button{
    background-color: <?= $brand_primary_color ?>;
  }

  .footer .form-field.newsletter input[type=text]{
    border: 1px solid <?= $brand_primary_color ?>;
  }

  .section.text h3{
    color: <?= $brand_primary_color ?>;
  }

  .team-text .title{
    color: <?= $brand_primary_color ?>;
  }

  .team-content .team-box .popular{
    color: <?= $brand_primary_color ?>;
  }

  .team-content .team-box .team-card .name{
    color: <?= $brand_primary_color ?>;
  }

  .team-content .team-box .team-card .position{
    color: <?= $brand_primary_color ?>;
  }

  .blog-navigation .link-left a, .blog-navigation .link-right a{
    color: <?= $brand_primary_color ?>;
  }

  .pricing-packages-content .package-box .popular{
    color: <?= $brand_primary_color ?>;
  }

  .pricing-packages-content .package-box .pricing-title{
    color: <?= $brand_primary_color ?>;
  }

  .blog-list .head a{
    color: <?= $brand_primary_color ?>;
  }

  .blog-list h2{
    color: <?= $brand_primary_color ?>;
  }

  .taxonomy-content .tax-title{
    color: <?= $brand_primary_color ?>;
  }

  .contact-us-content .contact-box .contact-title{
    color: <?= $brand_primary_color ?>;
  }

  .contact-us-content .contact-box .call-label{
    color: <?= $brand_primary_color ?>;
  }

  .contact-us-content .form-title{
    color: <?= $brand_primary_color ?>;
  }

  .section.book-appointment .title{
    color: <?= $brand_primary_color ?>;
  }

  .u-scalingSvg_icon{
      fill: <?= $brand_primary_color ?>;
  }

  .our-services-content .service-box .link a{
    color: <?= $brand_primary_color ?>;
  }

  .section.blog-slider .link a{
    color: <?= $brand_primary_color ?>;
  }

  .feature-article-headline .card{
    background-color: <?= $brand_primary_color ?>;
  }

  .blog-list .blog-search{
    border: 1px solid <?= $brand_primary_color ?>;
    color: <?= $brand_primary_color ?>;
  }

  .button-white{
    color: <?= $brand_primary_color ?> !important;
  }

  .button-white:hover{
    color: <?= $brand_primary_color ?> !important;
  }

  .catMenu_button {
    border: 1px solid <?= $brand_primary_color ?>;
  }


</style>
