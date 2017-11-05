
    $(function() {
        $('.btn i').click(function() {
            $('.bar-icon').toggleClass('close');
            $('.cross-icon').toggleClass('open');
            $('.navbar').toggleClass('visible');
        });
        $('.scroll').click(function(e) {
            e.preventDefault();
            $('body,html').animate({
                scrollTop: $(this.hash).offset().top
            }, 1000);
        });
        $(window).scroll(function() {
            var top = $(window).scrollTop();
            if (top > 0) {
                $('header').addClass('background');
            } else {
                $('header').removeClass('background');
            }

        });

    });