<!-- main page structure -->
<div id="main_wrapper">
    <div class="header">
        <?php get_header();?>
    </div>
    <div class="main_body">
        <div class="popup">
            <p>Before you go,check our discounts</p>
        </div>
        
        <?php get_template_part('partials/body','page'); ?>
        <!-- add second stripe with divs -->
        <?php get_template_part('partials/body','page-two'); ?>
        <!-- add third stripe of body section with Range of Services -->
        <?php get_template_part('partials/services','page'); ?>
        <!-- letters container -->
        <?php get_template_part('partials/letters','page'); ?>
        <!-- new line with products - cars -->
        <?php get_template_part('partials/body','page-three'); ?>
    </div>
    
    <div class="footer" id="contact_us">
        <?php get_footer(); ?>
    </div>
    
</div>