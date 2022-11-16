import Swiper, { Navigation, Pagination } from 'swiper';
import '../../../scss/base/swiper.scss';

function initSliders() {
   if (document.querySelector('.conditions__slider')) {
      new Swiper('.conditions__slider', {
         modules: [Pagination],
         observer: true,
         observeParents: true,
         speed: 800,
         pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
         },
         breakpoints: {
            320: {
               slidesPerView: 1,
               spaceBetween: 10,
            },
            700: {
               slidesPerView: 2,
               spaceBetween: 35,
            },
            900: {
               slidesPerView: 2,
               spaceBetween: 30,
               watchOverflow: false,
            },
            1250: {
               slidesPerView: 5,
               spaceBetween: 30,
               watchOverflow: true,
            },
         },
      });
   }
   if (document.querySelector('.reviews__slider')) {
      new Swiper('.reviews__slider', {
         modules: [Pagination],
         observer: true,
         observeParents: true,
         speed: 800,
         grabCursor: true,
         loop: true,
         pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
         },
         breakpoints: {
            320: {
               spaceBetween: 10,
               slidesPerView: 2,
            },
            700: {
               slidesPerView: 2,
               spaceBetween: 30,
            },
            1100: {
               slidesPerView: 3,
               spaceBetween: 30,
            },
            1400: {
               slidesPerView: 4,
               spaceBetween: 30,
            },
            1700: {
               slidesPerView: 5,
               spaceBetween: 30,
               centeredSlides: true,
            },
            2000: {
               slidesPerView: 6,
               spaceBetween: 30,
               centeredSlides: true,
            },
         },
      });
   }
   if (document.querySelector('.video-list__slider')) {
      new Swiper('.video-list__slider', {
         modules: [Pagination, Navigation],
         observer: true,
         observeParents: true,
         speed: 800,
         grabCursor: true,
         simulateTouch: false,
         slidesPerView: 1,
         initialSlide: 1,
         centeredSlides: true,
         effect: 'coverflow',
         coverflowEffect: {
            speed: 4000,
            modifier: 1,
            slideShadows: true,
         },
         pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
         },
         navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         },
         breakpoints: {
            320: {
               spaceBetween: 30,
               effect: 'slide',
            },
            767: {
               spaceBetween: -300,
            },
            830: {
               spaceBetween: -400,
            },
            991: {
               spaceBetween: -500,
            },
            1150: {
               spaceBetween: -600,
            },
            1500: {
               spaceBetween: -800,
            },
            1750: {
               spaceBetween: -1100,
            },
            1810: {
               spaceBetween: -1200,
            },
            1930: {
               spaceBetween: -1250,
            },
            1990: {
               spaceBetween: -1300,
            },
            2045: {
               spaceBetween: -1350,
            },
            2105: {
               spaceBetween: -1400,
            },
            2190: {
               spaceBetween: -1450,
            },
            2250: {
               spaceBetween: -1500,
            },
            2370: {
               spaceBetween: -1600,
            },
            2500: {
               spaceBetween: -1700,
            },
            2700: {
               spaceBetween: -1900,
            },
         },
      });
   }
   if (document.getElementById('cabinetHomeSliderBnb')) {
      new Swiper('#cabinetHomeSliderBnb', {
         observer: true,
         observeParents: true,
         observeSlideChildren: true,
         speed: 800,
         grabCursor: true,
         watchOverflow: true,
         breakpoints: {
            320: {
               slidesPerView: 1.2,
               spaceBetween: 20,
               centeredSlides: true,
            },
            440: {
               slidesPerView: 1.75,
               spaceBetween: 20,
               centeredSlides: true,
            },
            575: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            767: {
               slidesPerView: 3,
               spaceBetween: 20,
            },
            1150: {
               slidesPerView: 5,
               spaceBetween: 20,
            },
            1500: {
               slidesPerView: 5,
               spaceBetween: 20,
            },
         },
      });
   }
   if (document.getElementById('cabinetHomeSliderBusd')) {
      new Swiper('#cabinetHomeSliderBusd', {
         observer: true,
         observeParents: true,
         observeSlideChildren: true,
         speed: 800,
         grabCursor: true,
         watchOverflow: true,
         breakpoints: {
            320: {
               slidesPerView: 1.2,
               spaceBetween: 20,
               centeredSlides: true,
            },
            440: {
               slidesPerView: 1.75,
               spaceBetween: 20,
               centeredSlides: true,
            },
            575: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            767: {
               slidesPerView: 3,
               spaceBetween: 20,
            },
            1150: {
               slidesPerView: 5,
               spaceBetween: 20,
            },
            1500: {
               slidesPerView: 5,
               spaceBetween: 20,
            },
         },
      });
   }
   if (document.getElementById('cabinetReinvestSliderBnb')) {
      new Swiper('#cabinetReinvestSliderBnb', {
         observer: true,
         observeParents: true,
         observeSlideChildren: true,
         speed: 800,
         grabCursor: true,
         watchOverflow: true,
         breakpoints: {
            320: {
               slidesPerView: 1.2,
               spaceBetween: 20,
               centeredSlides: true,
            },
            440: {
               slidesPerView: 1.75,
               spaceBetween: 20,
               centeredSlides: true,
            },
            575: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            767: {
               slidesPerView: 3,
               spaceBetween: 20,
            },
            1150: {
               slidesPerView: 5,
               spaceBetween: 20,
            },
            1500: {
               slidesPerView: 5,
               spaceBetween: 20,
            },
         },
      });
   }
   if (document.getElementById('cabinetReinvestSliderBusd')) {
      new Swiper('#cabinetReinvestSliderBusd', {
         observer: true,
         observeParents: true,
         observeSlideChildren: true,
         speed: 800,
         grabCursor: true,
         watchOverflow: true,
         breakpoints: {
            320: {
               slidesPerView: 1.2,
               spaceBetween: 20,
               centeredSlides: true,
            },
            440: {
               slidesPerView: 1.75,
               spaceBetween: 20,
               centeredSlides: true,
            },
            575: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            767: {
               slidesPerView: 3,
               spaceBetween: 20,
            },
            1150: {
               slidesPerView: 5,
               spaceBetween: 20,
            },
            1500: {
               slidesPerView: 5,
               spaceBetween: 20,
            },
         },
      });
   }
   if (document.getElementById('cabinetAsideSwiper') && window.matchMedia('(max-width: 991px)').matches) {
      new Swiper('#cabinetAsideSwiper', {
         modules: [Navigation],
         observer: true,
         observeParents: true,
         observeSlideChildren: true,
         speed: 800,
         grabCursor: true,
         watchOverflow: true,
         autoHeight: true,
         spaceBetween: 40,
         loop: true,
         navigation: {
            prevEl: '.cabinet-aside__prew-btn ',
            nextEl: '.cabinet-aside__next-btn',
         },
         breakpoints: {
            991: {
               slidesPerView: 1,
            },
         },
      });
   }
}
window.addEventListener('load', function () {
   initSliders();
});
