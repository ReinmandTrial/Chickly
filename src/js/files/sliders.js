/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import '../../scss/base/swiper.scss';
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
   // Перечень слайдеров
   // Проверяем, есть ли слайдер на стронице
   if (document.querySelector('.conditions__slider')) {
      // Указываем скласс нужного слайдера
      // Создаем слайдер
      new Swiper('.conditions__slider', {
         // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Pagination],
         observer: true,
         observeParents: true,
         speed: 800,

         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,

         // Пагинация

         pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
         },

         // Брейкпоинты

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

         // События
         on: {},
      });
   }
   if (document.querySelector('.reviews__slider')) {
      // Указываем скласс нужного слайдера
      // Создаем слайдер
      new Swiper('.reviews__slider', {
         // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Pagination],
         observer: true,
         observeParents: true,
         speed: 800,
         grabCursor: true,
         //touchRatio: 0,
         //simulateTouch: false,
         loop: true,
         //preloadImages: false,
         //lazy: true,

         // Пагинация

         pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
         },

         // Брейкпоинты

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

         // События
         on: {},
      });
   }
   if (document.querySelector('.video-list__slider')) {
      // Указываем скласс нужного слайдера
      // Создаем слайдер
      new Swiper('.video-list__slider', {
         // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Pagination, Navigation],
         observer: true,
         observeParents: true,
         speed: 800,
         grabCursor: true,
         //touchRatio: 0,
         simulateTouch: false,
         // loop: true,
         //preloadImages: false,
         //lazy: true,
         slidesPerView: 1,
         initialSlide: 1,
         centeredSlides: true,

         effect: 'coverflow',
         coverflowEffect: {
            speed: 4000,
            modifier: 1,
            slideShadows: true,
         },

         // Пагинация

         pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
         },
         navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         },

         // Брейкпоинты

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

         // События
         on: {},
      });
   }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
   let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
   if (sliderScrollItems.length > 0) {
      for (let index = 0; index < sliderScrollItems.length; index++) {
         const sliderScrollItem = sliderScrollItems[index];
         const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
         const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: {
               enabled: true,
            },
            scrollbar: {
               el: sliderScrollBar,
               draggable: true,
               snapOnRelease: false,
            },
            mousewheel: {
               releaseOnEdges: true,
            },
         });
         sliderScroll.scrollbar.updateSize();
      }
   }
}

window.addEventListener('load', function (e) {
   // Запуск инициализации слайдеров
   initSliders();
   // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
   //initSlidersScroll();
});
