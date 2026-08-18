<?php namespace Luca\Theme\Utils;

function get_acf_image($image, $size) {
  if (isset($image['sizes'][$size])) {
    return $image['sizes'][$size];
  } else {
    return $image['url'];
  }

}
