 <!-- popup modal -->
 <div id="popup">
       <div id="popup_message">
            <div id="popupHeader">
                <span style="float:left;margin-left:1%;"><h4>Before you go...</h4></span>
                <span style="float:right;">
                    <button id="x_popup" onclick="closePopup()">Maybe later</button>
                </span>
            </div>
            <div id="popup_txt">
                <h2 style="margin-top: 150px;margin-left: 30%;">check our discounts!</h2>
            </div>
            <div id="popupFooter"></div>
      </div>
</div>
    <!-- end of popup modal -->

<!-- main page structure -->
<div id="main_wrapper">

  


    <div class="header">
        <?php get_header();?>
    </div>
    <div class="main_body">
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