<?php if( have_rows('packages-repeater') ):  ?>
<div class="section our-packages-text">
	<div class="container">''
		<div class="row">
			<div class="col-md-12">
				<h2 class="title"><?= get_field('package_title'); ?></h2>
				<div class="description">
					<?= get_field('package_description'); ?> 
				</div>
			</div>
		</div>
	</div>
</div>
<div class="section our-packages-content" style="background-image: url(<?= get_field('package_background_image')['url']; ?>);">
	<div class="container boxes">
		<div class="row">
			<div class="col-md-12">
					<div class="package-box row">
						<?php 
							if( have_rows('packages-repeater') ):
    							while( have_rows('packages-repeater') ) : the_row();
						?>
						<div class="col-md-4">
							<div class="popular"><?= get_sub_field('popular') ? 'POPULAR' : ''; ?></div>
							<div class="title"><?= get_sub_field('package_name'); ?></div>
							<div class="description">
								<?= get_sub_field('package_description'); ?>
							</div>
							<div class="details">
								<ul>
									<?php 
										if( have_rows('package_info') ):
    										while( have_rows('package_info') ) : the_row();
									?>
									<li><?= get_sub_field('information'); ?></li>
									<?php 
											endwhile;
										endif;
									?>
								</ul>
							</div>
							<?php if(!empty(get_sub_field('button_link')['title'])):  ?>
								<div class="link">
									<?php  $link_target = get_sub_field('button_link')['target'] ? get_sub_field('button_link')['target'] : '_self'; ?>
									<a href="<?= get_sub_field('button_link')['url']; ?>" class="button button-green" target="<?php echo esc_attr( $link_target ); ?>"><?= get_sub_field('button_link')['title']; ?></a>
								</div>
							<?php endif; ?>
						</div>
						<?php
								endwhile;
							endif;
						?>
					</div>
			</div>

		</div>
	</div>
</div>
<?php endif; ?>