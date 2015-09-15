
(function( $ ){
    $.fn.slickAnimation = function() {
        var currentSlickSlider = $(this);

        var slickItems = currentSlickSlider.find('.slick-list .slick-track > div');

        slickItems.each(function(){
           var slickItem = $(this);

            slickItem.find('div[data-animation-in]').each(function(){
               var dataAnimationIn = $(this);

                var animationIn = dataAnimationIn.attr('data-animation-in');

                console.log(animationIn);
            });
        });
    }
})( jQuery );