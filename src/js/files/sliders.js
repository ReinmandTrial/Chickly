/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Pagination } from 'swiper';
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
   if (document.querySelector('.nft-chicks__slider')) {
      // Указываем скласс нужного слайдера
      // Создаем слайдер
      new Swiper('.nft-chicks__slider', {
         // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Pagination],
         observer: true,
         observeParents: true,
         autoHeight: true,
         speed: 800,

         // centeredSlides: true,

         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

         // Пагинация

         pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
         },

         // Скроллбар
         /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

         // Кнопки "влево/вправо"
         navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
         },

         // Брейкпоинты

         breakpoints: {
            320: {
               slidesPerView: 1,
               autoHeight: true,
               spaceBetween: 35,
            },
            600: {
               slidesPerView: 2,
               spaceBetween: 35,
            },
            1200: {
               slidesPerView: 3,
               spaceBetween: 35,
            },
            1060: {
               slidesPerView: 5,
               spaceBetween: 35,
            },
            1920: {
               slidesPerView: 5,
               spaceBetween: 35,
               watchOverflow: true,
            },
         },

         // События
         on: {},
      });
   }
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
         grabCursor:true,
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
