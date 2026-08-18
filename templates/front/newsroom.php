<div class="section newsroom">
    <div class="container">
        <div class="row">
            <h2 class="heading">Client Journey</h2>
        </div>
        <div class="row">
<div class="newsSlider js-newsSlider">
<?php
if (have_rows('news_room_items')):

    while (have_rows('news_room_items')):
        the_row();

?>
            <div class="col-md-3">
                <div class="image">
                   <img src="<?=get_sub_field('nr_image') ['url']; ?>">
                </div>
                <div class="title"><?=get_sub_field('nr_title'); ?></div>
                <div class="description">
                   <?=get_sub_field('nr_description'); ?>
                </div>
            </div>

<?php

    endwhile;
endif;
?>
</div>
        </div>
    </div>
</div>
