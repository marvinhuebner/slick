(function ($) {
    $.fn.slickAnimation = function () {
        var currentSlickSlider = $(this);

        var slickItems = currentSlickSlider.find('.slick-list .slick-track > div');

        slickItems.each(function () {
            var slickItem = $(this);

            slickItem.find('[data-animation-in]').each(function () {
                var dataAnimationIn = $(this);

                var animationIn = dataAnimationIn.attr('data-animation-in');

                console.log(animationIn);
            });

            slickItem.find('[data-animation-out]').each(function () {
                var dataAnimationOut = $(this);

                var animationOut = dataAnimationOut.attr('data-animation-out');

                console.log(animationOut);
            });

            slickItem.find('[data-delay-in]').each(function () {
                var dataDelayIn = $(this);

                var delayIn = dataDelayIn.attr('data-delay-in');

                console.log(delayIn);
            });

            slickItem.find('[data-delay-out]').each(function(){
                var dataDelayOut = $(this);

                var delayOut = dataDelayOut.attr('data-delay-out');

                console.log(delayOut);
            });

        });
    }
})(jQuery);