import { translations, mobListTranslations } from './translations.js';

window.addEventListener('load', () => {
   setLang();
   // newSetLang();
});
const langHeadEL = document.querySelector('.language-block__flag');
const langHeadFlagImgEl = document.querySelector('.language-block__flag-head-img');
const langListLEl = document.querySelector('.language-block__body');

let lang = (window.hasOwnProperty('localStorage') && window.localStorage.getItem('lang')) || 'eng';
let flagLang = document.querySelector(`.language-block__item[data-lang = ${lang}] .language-block__flag-img`).getAttribute('src');

langListLEl.addEventListener('click', (e) => {
   if (e.target.classList.contains('language-block__item')) {
      lang = e.target.querySelector('.language-block__item-text').textContent;
      flagLang = e.target.querySelector('.language-block__flag-img').getAttribute('src');
      window.localStorage.setItem('lang', lang);
      location.reload();
      setLang();
      // newSetLang();
   }
});

export function setLang() {
   langHeadFlagImgEl.setAttribute('src', flagLang);
   if (langHeadEL.querySelector('source')) {
      langHeadEL.querySelector('source').setAttribute('srcset', flagLang);
   }
   for (let p in translations[lang]) {
      if (document.getElementById(p)) {
         document.getElementById(p).innerHTML = translations[lang][p];
      }
      if (document.querySelector(`.${p}[data-placeholder]`)) {
         document.querySelector(`.${p}[data-placeholder]`).setAttribute('placeholder', translations[lang][p]);
      }
   }
   translateListMob();
}

function translateListMob() {
   for (let p in mobListTranslations[lang]) {
      document.querySelectorAll('.' + p).forEach((el) => {
         el.innerHTML = mobListTranslations[lang][p];
      });
   }
}

//Locales new========================================================================================================================================================

// import engLocales from '../../../files/locales/eng.json';
// import espLocales from '../../../files/locales/esp.json';
// import vnmLocales from '../../../files/locales/vnm.json';
// import prtLocales from '../../../files/locales/prt.json';

// function newSetLang() {
//    const locales = selectLocales(lang);
//    const allDataEl = document.querySelectorAll('[data-lg]');
//    allDataEl.forEach((lgItem) => {
//       const landPath = lgItem.dataset.lg.split('.');
//       const path = landPath.reduce((acc, el) => {
//          return `[${acc}]` + `[${el}]`;
//       });
//       // lgItem.innerHTML = locales[landPath];
//    });
// }

// function selectLocales(language) {
//    if ((language = 'eng')) return engLocales;
//    if ((language = 'esp')) return espLocales;
//    if ((language = 'vnm')) return vnmLocales;
//    if ((language = 'prt')) return prtLocales;
// }
