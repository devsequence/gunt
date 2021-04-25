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

// function popupOpen() {
//     const $popupButton = $('.btn-popup, .header-mobile__login a');
//     $popupButton.on('click', function (e) {
//         const $this = $(this);
//         const popupButtonData = $this.data('popup');
//         $('.popup').removeClass('active');
//         $('div[data-popup = '+popupButtonData+']').addClass('active');
//         if ($this.parents('.header-user__item').length) {}else{
//             $('.popup-overlay').addClass('active');
//             $('body').addClass('scroll-h');
//         }
//         popupHeight();
//     });
// }
// popupOpen();
//






