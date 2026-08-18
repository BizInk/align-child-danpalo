<?php
/**
 * Template Name: About
 */
?>

<div class="section text">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<p class="center"><?= get_field('page_header_content'); ?></p>
			</div>
		</div>
	</div>
</div>

<div class="section text" style="background-color: #F6F6F6">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h3><?= get_field('title'); ?></h3>
				<?php
					if( have_rows('list_items') ):
					    while( have_rows('list_items') ) : the_row();
				?>
				<div class="text-item"><?= get_sub_field('item'); ?></div>
				<?php 
						endwhile;
					endif;
				?>
			</div>
		</div>
	</div>
</div>
<div class="section team-text">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h2 class="title"><?= get_field('team_title'); ?></h2>
				<div class="description">
					<?= get_field('team_description'); ?>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="section team-content" style="background-image: url(<?= get_field('team_bg')['url']; ?>);">
	<div class="container boxes">
		<div class="row">
			<div class="col-md-12">
				<?php
					if( have_rows('team_members') ):
						$index = 1;
					    while( have_rows('team_members') ) : the_row();
					    	$member_ID = get_sub_field('team_member')->ID;
					    		if($index % 2 != 0):
				?>
					<div class="team-box row">
				<?php endif; ?>
						<div class="col-md-6">
							<div class="team-card">
								<div class="row">
									<div class="col-md-5">
										<img src="<?= get_field('image', $member_ID)['url']; ?>">
									</div>
									<div class="col-md-7">
										<div class="name">
											<?= get_the_title($member_ID); ?>
										</div>
										<div class="position">
											<?= get_field('position', $member_ID); ?>
										</div>
										<div class="bio">
											<?php //wp_trim_words( get_field('profile', $member_ID), 18, '...' ); ?>
                                            <a href="<?= get_the_permalink($member_ID); ?>" style="font-family: 'Muli-Black'; display: block;margin-top: 20px;">Read more</a>
										</div>
									</div>
								</div>
							</div>
						</div>
				<?php if($index % 2 == 0): ?>
					</div>
				<?php 
							endif;
							$index++;
						endwhile;
					endif;
				?>
			</div>
		</div>
	</div>
</div>

	