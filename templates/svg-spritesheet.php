<?php
if (file_exists(get_stylesheet_directory() . '/dist/images/svg-sprites.svg')) {
    $base = get_stylesheet_directory_uri();
} else {
    $base = get_template_directory_uri();
}
?>

<!--[if gte IE 9]><!-->
<script>
  // SVG spritesheet include
  var ajax = new XMLHttpRequest();
  ajax.open("GET", "<?= $base; ?>/dist/images/svg-sprites.svg", true);
  ajax.send();
  ajax.onload = function(e) {
    var div = document.createElement("div");
    div.style.display = "none";
    div.innerHTML = ajax.responseText;
    document.body.insertBefore(div, document.body.childNodes[0]);
  }
</script>
<!--<![endif]-->
