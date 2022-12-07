
(function($) {
    'use strict';

/*var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  centeredSlides: true,
  initialSlide: 2,
  coverflowEffect: {
     rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 6,
    initialSlide: 3,
    slideShadows: true
  },
  pagination: {
    el: ".swiper-pagination",
     clickable: true
  }
});*/




$(function () {
        $('#logo-top-companies-5').owlCarousel({
            loop: true,
            margin: 10,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: true,
                    loop: false,
                    margin: 6
                },
                1200: {
                    items: 7,
                    nav: true,
                    loop: true,
                    margin: 12
                }
            }
        })
    })


        })(jQuery);