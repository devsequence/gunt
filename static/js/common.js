var windowWidth = $(window).width();
if (windowWidth < 992) {
}
$(document).mouseup(function (e){
    var div = $('.dropdown');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        div.find('.dropdown-list').removeClass('open');
    }
});


$('.header-btn, .header-close, .header-overlay').on('click', function () {
    var $this = $(this);
    $('.header-nav').toggleClass('active');
    $('body').toggleClass('scroll');
    $('.header-overlay').toggleClass('active');
});

$(".hero-item").on({
    mouseenter: function () {
        var popupBg = $(this).data('bg');
        $('div[data-bg = '+popupBg+']').addClass('active');
    },
    mouseleave: function () {
        var popupBg = $(this).data('bg');
        $('div[data-bg = '+popupBg+']').removeClass('active');
    }
});
$(".hero-wrapper").on({
    mouseleave: function () {
        $('.hero-media__item:first-child').addClass('active');
    }
});


var projectSlider = new Swiper('.project-slider', {
    slidesPerView: 3,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
$(document).ready(function() {
    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $(".about-information, .hero-wrapper, .service-home").mousemove(function(e){
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * +1 + 1;
        var newvalueY = height * pageY * +2 + 300;
        var styles = {
            top : newvalueX+"px",
            right: newvalueY+"px"
        };
        $('.about-information .parallax-block').css(styles);
    });
});






