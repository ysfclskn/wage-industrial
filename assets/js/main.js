$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true
        },
        600:{
            items:3,
            nav:false,
            loop:true
        },
        1000:{
            items:5,
            nav:true,
            loop:true
        } }
  });
});

$(function () {
    $('.scroll-animate a').click(function (e) {
        var href = $(e.target).attr('href');
        
        $('html, body').animate ({
            scrollTop: $(href).offset().top -30
        }, 1000)
    });
});

AOS.init();

    