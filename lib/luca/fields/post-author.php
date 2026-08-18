<?php if( function_exists('acf_add_local_field_group') ):

  acf_add_local_field_group(array (
    'key' => 'post_author',
    'title' => 'Post author',
    'fields' => array (
      array (
        'key' => 'post_author_image',
        'label' => 'Image',
        'name' => 'post_author_image',
        'type' => 'image',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array (
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'return_format' => 'array',
        'preview_size' => 'thumbnail',
        'library' => 'all',
        'min_width' => '',
        'min_height' => '',
        'min_size' => '',
        'max_width' => '',
        'max_height' => '',
        'max_size' => '',
        'mime_types' => '',
      ),
      array (
        'key' => 'post_author_description',
        'label' => 'Description',
        'name' => 'post_author_description',
        'type' => 'wysiwyg',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array (
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'default_value' => '',
        'tabs' => 'all',
        'toolbar' => 'full',
        'media_upload' => 1,
      ),
    ),
    'location' => array (
      array (
        array(
          'param' => 'user_form',
          'operator' => '==',
          'value' => 'all',
        ),
      ),
    ),
    'menu_order' => 0,
    'position' => 'normal',
    'style' => 'default',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
    'hide_on_screen' => '',
    'active' => 1,
    'description' => '',
  ));

endif;
