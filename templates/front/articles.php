<div class="section front-articles">
	<div class="container">
			<?php 
				if( have_rows('articles') ):
					$index = 0;
				    while( have_rows('articles') ) : the_row();
				    	if($index % 2 == 0) : 

			?>
			<div class="article-item row">
				<div class="col-md-6 left">
					<div class="item">
						<div class="title">
							<?= get_sub_field('title'); ?>
						</div>
						<div class="description">
							<?= get_sub_field('description'); ?>
						</div>
						<div class="link">
							<a href="<?= get_sub_field('link')['url']; ?>" class="button button-white"><?= get_sub_field('link')['title']; ?></a>
						</div>
					</div>
				</div>
				<div class="col-md-6 right">
					<div class="article-image" style="background-image: url(<?= get_sub_field('image')['url']; ?>);"></div>
				</div>
			</div>
			<?php else : ?>

			<div class="article-item row">
				<div class="col-md-6 left">
					<div class="article-image" style="background-image: url(<?= get_sub_field('image')['url']; ?>);"></div>
				</div>
				<div class="col-md-6 right">
					<div class="item">
						<div class="title">
							<?= get_sub_field('link')['title']; ?>
						</div>
						<div class="description">
							<?= get_sub_field('description'); ?>
						</div>
						<div class="link">
							<a href="<?= get_sub_field('link')['url']; ?>" class="button button-white">Read More</a>
						</div>
					</div>
				</div>
			</div>
			<?php 	
						endif;
						$index++;
					endwhile;
				endif;
			?>
	</div>
</div>