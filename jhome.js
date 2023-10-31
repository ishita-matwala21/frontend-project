//navbar

$(document).ready(function() {
    const navbar = $('.navbar');
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 180) {
            navbar.addClass('bg');
        } else {
            navbar.removeClass('bg');
        }
    });
});

//image collage

$(document).ready(function() {
    const collageImages = $('.collage-img');

    collageImages.on('mouseover', function() {
        const currentIndex = collageImages.index(this);
        collageImages.each(function(index, image) {
            if (index !== currentIndex) {
                $(image).css('filter', 'blur(8px)');
            }
        });
        collageImages.eq(currentIndex).css('z-index',2);
    });

    collageImages.on('mouseleave', function() {
        collageImages.css('filter', 'none');
        collageImages.css('z-index', 1);
    });
});