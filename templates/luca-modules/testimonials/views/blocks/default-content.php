

<?php if (count($data['testimonials'])): ?>
<div class="row">
  <div class="col-md-12">
    <?php if ($data['title'] || $data['summary']): ?>
      <h2 class="title">What our clients say</h2> 
    <?php endif; ?>
    <div class="testimonialSlider js-testimonialSlider">
      <?php foreach ($data['testimonials'] as $testimonial):
        global $post;
        $post = $testimonial['post'];
        setup_postdata($post);
      ?>

      <div class="testimonialSlider_slide">
        <div class="col-md-3">
          <div class="name">
            <?= $testimonial['person']; ?>,<br />
            <?= $testimonial['company']; ?> <br />
          </div>
        </div>
        <div class="col-md-9">
          <div class="col-md-1 quote"></div>
          <div class="col-md-11 testimonial">
            <?= $testimonial['short_description']; ?>
          </div>
        </div>
      </div>

      <?php  wp_reset_postdata();

      endforeach; ?>
    </div>

  </div>

</div>

<?php endif; ?>