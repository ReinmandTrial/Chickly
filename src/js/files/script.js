// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

//========================================================================================================================================================

{
   const arrayItem = Array.from(document.querySelectorAll('.replenishment__item'));
   const seeMoreBtn = document.querySelector('.replenishment__button');
   let i = 0;

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

//regional========================================================================================================================================================

const product = document.querySelector('.regional-list__main-content');
if (product) {
   const lengthPart = 6; // количество элементов в 1 части
   const pagination = document.querySelector('.pagination__content');

   let data = [...product.children]; // Тут храним все `.card`, типо аналог БД, т.е исходные данные.
   let chunks = SplitParts(data); // Тут храним части. Ниже описание функции.

   RenderChunks(0); // Рендерим первую часть. Описание функии ниже.
   RenderPagination(); // Рендерим пагинацию. Описание тоже ниже.

   document.addEventListener('selectCallback', function (e) {
      // Селект
      const currentSelect = e.detail.select;
      const curVal = currentSelect.value;
      if (curVal === 'ALL') {
         chunks = SplitParts(data);
      } else {
         let curArr = [SplitParts(data.filter((elem) => elem.classList.contains(curVal)))];
         chunks = curArr;
      }

      RenderChunks(0); // После отработки фильтра важно перерендерить части..
      RenderPagination(); // и пагинацию
   });

   // Механика работы пагинации
   pagination.addEventListener('click', (e) => {
      e.preventDefault();
      let item = e.target.closest('.pagination__item'); // Тут тоже делегирование, как в механике выше.
      if (item) {
         let active = pagination.querySelector('.pagination__item.active'), // получим активную страницу
            part; // сюда запишем номер части, для проверок пагинации
         if (item.classList.contains('pagination__item_prev') || item.classList.contains('pagination__item_next')) {
            // если нажата кнопка "вперёд" или "назад"
            if (item.classList.contains('disable')) return false; // Если кнопка имеет класс `disable`, то прекращаем выполнение кода ниже
            part = +active.dataset.part; // записываем номер части активной страницы.
            part = item.classList.contains('pagination__item_prev') ? part - 1 : part + 1; // Если нажата кнопка "назад", то отнимаем единицу активной старница, если "вперёд", то прибавляем.

            RenderChunks(part); // Рендерим страница
            // Меняем в пагинации активную страницу
            active.classList.remove('active'); // Находим активную и удаляем класс `active`
            pagination.querySelector(`.pagination__item[data-part="${part}"]`).classList.add('active'); // находим страницу с `data-part`, который равен активной странице и добавляем ему класс `active`
         } else {
            // Если нажаты кнопки страницы (1, 2, 3 и т.п.)
            active.classList.remove('active'); // удаляем класс `active` у активной.
            item.classList.add('active'); // добавляем нажатой кнопке класс `active`
            part = +item.dataset.part; // получаем её номер части
            RenderChunks(part); // Рендерим страницу.
         }
         // Тут запрещаем или разрешаем использовать кнопки "вперёд" или "назад", в зависимости от того, какая часть сейчас активна.
         let prev = pagination.querySelector('.pagination__item.pagination__item_prev'),
            next = pagination.querySelector('.pagination__item.pagination__item_next');

         // Сначала удалим у них класс `disable`, если он есть
         if (prev.classList.contains('disable')) prev.classList.remove('disable');
         if (next.classList.contains('disable')) next.classList.remove('disable');
         if (part === 0) prev.classList.add('disable'); // Проверим является ли активная страница началом частей, если да, то запретим использовать кнопку "назад"
         if (part === chunks.length - 1) next.classList.add('disable'); // если активная является концом частей, то запрещаем "вперёд".
      }
   });

   // Функция которая делит массив на части.
   function SplitParts(arr) {
      // передаём массив, который нужно разбить
      if (arr.length > lengthPart) {
         // проверяем, имеет ли переданный массив длину больше, чем длина части
         var _chunks = [],
            // подготавливаем возращаемый массив с частями
            parts = Math.floor(arr.length / lengthPart); // сколько частей получится

         for (var i = 0; i < arr.length; i += lengthPart) {
            // проходим по массиву, шаг длине части
            _chunks.push(arr.slice(i, i + lengthPart));
         } // добавляем часть в массив с частями

         return _chunks; // возвращаем массив
      } else return arr; // если получаемый массив меньше длины части, то возвращаем его же.
   }

   // Функция для вывода конкретно части в HTML
   function RenderChunks(part) {
      // передаём порядковый номер части
      if (part >= 0 && part < chunks.length) {
         // если номер части > 0 и < длины частей
         product.innerHTML = ''; // очищаем элемент, куда будем выводить части

         chunks[part].map(function (elem) {
            return product.append(elem);
         }); // Выводим т.к. в исходном массиве уже сразу Element, то мы можем добавить его через .append
      } else return false;
   }

   function RenderPagination() {
      pagination.innerHTML = '';
      if (chunks.length > 1) {
         // Добавляем кнопки
         chunks.map((elem, i) =>
            pagination.insertAdjacentHTML(
               'beforeend',
               `<button class="pagination__item ${i === 0 ? ' active' : ''}" data-part="${i}">${i + 1}</button>`
            )
         );
         // Добавляем кнопки "вперёд" и "назад"
         pagination.insertAdjacentHTML('afterbegin', '<button class="pagination__item pagination__item_prev disable"><</button>'); // Т.к. данная функция создаёт пагинацию у которой первая страница активна, то сразу запрещаем кнопке "назад" работать.
         pagination.insertAdjacentHTML('beforeend', '<button class="pagination__item pagination__item_next">></button>');
      }
   }
}

//========================================================================================================================================================

//calc START========================================================================================================================================================
const MAIN_CALC_EL = document.getElementById('interestScreme');
//-----
const calcBnbInputEL = document.getElementById('calcInputBnb');
const calcBnbBtnPlusEL = document.getElementById('calcBnbPlus');
const calcBnbBtnMinusEL = document.getElementById('calcBnbMinus');
const calcBnbResultEl = document.getElementById('calcBnbResult');
//-----
const calcDaysInputEL = document.getElementById('calcInputDays');
const calcDaysBtnPlusEL = document.getElementById('calcDaysPlus');
const calcDaysBtnMinusEL = document.getElementById('calcDaysMinus');
const calcDaysResultEl = document.getElementById('calcDaysResult');
//-----
const calcTotalPercentEl = document.getElementById('calcTotalPercent');
const calcInvestmentSumInputEl = document.getElementById('calcInvestmentSum');
const calcProfitSumEl = document.getElementById('profitSum');
//-----
const calcAllInput = MAIN_CALC_EL.querySelectorAll('input');

calcAllInput.forEach((el) =>
   el.addEventListener('input', function (e) {
      this.value = this.value.replace(/[^\d.]/g, '');
   })
);

calcInit();

function calcInit() {
   calcBnbInputEL.value = '400';
   calcDaysInputEL.value = '1';
   calcTotalPercent();
}
//========================================================================================================================================================
calcBnbInputEL.addEventListener('input', calcBnbPercent);
calcBnbBtnPlusEL.addEventListener('click', addBnbInput);
calcBnbBtnMinusEL.addEventListener('click', subBnbInput);

function addBnbInput() {
   calcBnbInputEL.value = +calcBnbInputEL.value + 400;
   calcBnbPercent();
}
function subBnbInput() {
   if (calcBnbInputEL.value > 400) {
      calcBnbInputEL.value = +calcBnbInputEL.value - 400;
      calcBnbPercent();
   }
}
function calcBnbPercent() {
   const resultBnb = Math.trunc(+calcBnbInputEL.value / 400);
   calcBnbResultEl.textContent = resultBnb / 10;
   calcTotalPercent();
}

//========================================================================================================================================================
calcDaysInputEL.addEventListener('input', calcDaysPercent);
calcDaysBtnPlusEL.addEventListener('click', addDaysInput);
calcDaysBtnMinusEL.addEventListener('click', subDaysInput);

function addDaysInput() {
   calcDaysInputEL.value = +calcDaysInputEL.value + 1;
   calcDaysPercent();
}
function subDaysInput() {
   if (calcDaysInputEL.value > 1) {
      calcDaysInputEL.value = +calcDaysInputEL.value - 1;
      calcDaysPercent();
   }
}
function calcDaysPercent() {
   const resultDays = calcDaysInputEL.value / 10;
   calcDaysResultEl.textContent = resultDays;
   calcTotalPercent();
}

//========================================================================================================================================================

function calcTotalPercent() {
   const resultPercent = +calcBnbResultEl.textContent + +calcDaysResultEl.textContent + 1;
   calcTotalPercentEl.textContent = resultPercent.toFixed(1);
   calcDailyProfit();
}

//========================================================================================================================================================
calcInvestmentSumInputEl.addEventListener('input', calcDailyProfit);

function calcDailyProfit() {
   const profit = (calcInvestmentSumInputEl.value / 100) * +calcTotalPercentEl.textContent;
   calcProfitSumEl.textContent = profit.toFixed(1);
}

//calc END========================================================================================================================================================
