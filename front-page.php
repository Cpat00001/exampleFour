<!-- main page structure -->
<div class="main_wrapper">
    <div class="header">
        <?php get_header();?>
    </div>
    <div class="main_body">
        <?php get_template_part('partials/body','page'); ?>
        <!-- add second stripe with divs -->
        <?php get_template_part('partials/body','page-two'); ?>
    </div>
    <div class="footer">
        <?php get_footer(); ?>
    </div>
</div>