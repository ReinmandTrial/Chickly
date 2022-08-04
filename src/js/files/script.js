// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

// {
//    const arrayItem = Array.from(document.querySelectorAll('.replenishment__item'));
//    const seeMoreBtn = document.querySelector('.replenishment__button');
//    let i = 0;

   if (arrayItem.length > 0) {
      for (i; i !== 6; i++) {
         const element = arrayItem[i];
         element.classList.add('active', 'see');
      }

      seeMoreBtn.addEventListener('click', addItem);

      function addItem() {
         let res = i + 6;
         if (i < arrayItem.length) {
            for (i; i !== res; i++) {
               const element = arrayItem[i];
               element.classList.add('active');
               setTimeout(() => {
                  element.classList.add('see');
               }, 200);
            }
         }
      }
   }
}
