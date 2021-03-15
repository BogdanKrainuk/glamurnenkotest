$(window).scroll(function() {
    var top = $(document).scrollTop();
    if (top < 600) $("#header").removeClass('fixed');
    else $("#header").addClass('fixed');
});

$('.btn').on('click', function(){
    $('body, html').animate({
        scrollTop: 0
    }, 800);
    return false;
});