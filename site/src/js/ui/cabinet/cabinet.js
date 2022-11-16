import { menuClose } from '../../base/libs/functions.js';
import Swiper from 'swiper';
if (document.querySelector('.cabinet')) {
   //header balance dropdown========================================================================================================================================================
   currencyMagager();
   function currencyMagager() {
      const currencyElList = document.querySelectorAll('.cabinet-header-ballance');
      const headSumListEl = document.querySelectorAll('.cabinet-header-ballance__sum');

      if (currencyElList && headSumListEl) {
         const curWalletCurrency = (window.hasOwnProperty('localStorage') && window.localStorage.getItem('currency')) || 'bnb';
         setCurrency(curWalletCurrency);
         currencyElList.forEach((el) => {
            el.addEventListener('click', (item) => {
               if (item.target.classList.contains('cabinet-header-ballance__body-item')) {
                  window.localStorage.setItem('currency', item.target.dataset.wallet);
                  setCurrency(item.target.dataset.wallet);
               }
            });
         });
      }
      function setCurrency(currency) {
         if (currency === 'bnb') {
            writeCurrency(document.querySelector('[data-wallet-sum = bnb]'));
         }
         if (currency === 'busd') {
            writeCurrency(document.querySelector('[data-wallet-sum = busd]'));
         }
      }
      function writeCurrency(val) {
         headSumListEl.forEach((el) => {
            el.textContent = val.textContent;
         });
      }
   }
   //header balance dropdown========================================================================================================================================================
   //Navigation TABS========================================================================================================================================================
   cabinetNavigation();
   function cabinetNavigation() {
      const navListBtnEl = document.querySelectorAll('[data-nav-cabinet-btn]');
      const navListBodyEl = document.querySelectorAll('[data-cabinet-body]');
      const referalBtn = document.querySelector('[data-link="2"]');

      if (navListBtnEl && navListBodyEl && referalBtn) {
         navListBtnEl.forEach((btn) => {
            btn.addEventListener('click', (el) => {
               if (el.target.classList.contains('cabinet-header-menu__item') && !el.target.classList.contains('_active-nav')) {
                  resetCabinet(navListBtnEl, '_active-nav');
                  resetCabinet(navListBodyEl, '_active-body');
                  btn.classList.add('_active-nav');
                  const curBody = document.querySelector(`[data-cabinet-body = '${btn.dataset.navCabinetBtn}']`);
                  curBody.classList.add('_active-body');
                  setBg(btn.dataset.navCabinetBtn);
                  menuClose();
               }
            });
         });
         referalBtn.addEventListener('click', () => {
            resetCabinet(navListBtnEl, '_active-nav');
            resetCabinet(navListBodyEl, '_active-body');
            document.querySelector('[data-nav-cabinet-btn = "2"]').classList.add('_active-nav');
            document.querySelector('[data-cabinet-body = "2"]').classList.add('_active-body');
            setBg('2');
         });
      }

      function resetCabinet(arr, state) {
         arr.forEach((btn) => {
            btn.classList.remove(state);
         });
      }
      function setBg(number) {
         const cabinetBg = document.querySelector('[data-bg]');
         cabinetBg.dataset.bg = number;
      }
   }
   //Navigation TABS========================================================================================================================================================
   //Aside========================================================================================================================================================
   asideController();
   function asideController() {
      const asideEl = document.querySelector('.cabinet-aside');
      if (asideEl) {
         asideEl.addEventListener('click', (el) => {
            if (el.target.classList.contains('cabinet-aside__opener')) {
               asideEl.classList.toggle('_active');
            }
         });
      }
   }
   //Aside========================================================================================================================================================
   //copiBtn========================================================================================================================================================
   copyRefLink();
   function copyRefLink() {
      const copuBlock = document.querySelectorAll('[data-copy-block]');
      if (copuBlock) {
         copuBlock.forEach((block) => {
            block.addEventListener('click', (el) => {
               if (el.target.hasAttribute('data-copy-btn')) {
                  copyLabel();
                  const copuValEl = block.querySelector('[data-copy-val]');
                  navigator.clipboard.writeText(copuValEl.textContent);
               }
            });
         });
      }
      function copyLabel() {
         const copiedLabel = document.querySelector('.copied');
         copiedLabel.classList.add('_active');
         setTimeout(() => {
            copiedLabel.classList.remove('_active');
         }, 2000);
      }
   }
   //copiBtn========================================================================================================================================================

   const homeBnbSLider = new Swiper('#cabinetHomeSliderBnb', {
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
   const homeBusdSLider = new Swiper('#cabinetHomeSliderBusd', {
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
   const reinvestBnbSLider = new Swiper('#cabinetReinvestSliderBnb', {
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
   const reinvestBusdSLider = new Swiper('#cabinetReinvestSliderBusd', {
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
   homeBusdSLider.disable();
   reinvestBnbSLider.disable();
   reinvestBusdSLider.disable();

   const homeTabsBtn = document.querySelectorAll('.cabinet-home__tabs-title');
   const reivestTabsBtn = document.querySelectorAll('.cabinet-reinvest__tabs-title');
   const navHomeBtnEl = document.getElementById('navHomeBtn');
   const navPartnersBtnEl = document.getElementById('navPartnersBtn');
   const navTradeBtnEl = document.getElementById('navTradeBtn');
   const navReinvestBtnEl = document.getElementById('navReinvestBtn');

   homeTabsBtn.forEach((btn) => {
      btn.addEventListener('click', (el) => {
         if (btn.dataset.val === 'BNB') {
            homeBnbSLider.enable();
            homeBusdSLider.disable();
         }
         if (btn.dataset.val === 'BUSD') {
            homeBnbSLider.disable();
            homeBusdSLider.enable();
         }
      });
   });

   navHomeBtnEl.addEventListener('click', () => {
      reinvestBnbSLider.disable();
      reinvestBusdSLider.disable();
      homeBnbSLider.enable();
   });

   reivestTabsBtn.forEach((btn) => {
      btn.addEventListener('click', (el) => {
         if (btn.dataset.val === 'BNB') {
            reinvestBnbSLider.enable();
            reinvestBusdSLider.disable();
         }
         if (btn.dataset.val === 'BUSD') {
            reinvestBnbSLider.disable();
            reinvestBusdSLider.enable();
         }
      });
   });
   navReinvestBtnEl.addEventListener('click', () => {
      homeBnbSLider.disable();
      homeBusdSLider.disable();
      reinvestBnbSLider.enable();
   });

   navPartnersBtnEl.addEventListener('click', () => {
      homeBnbSLider.disable();
      homeBusdSLider.disable();
      reinvestBnbSLider.disable();
      reinvestBusdSLider.disable();
   });
   navTradeBtnEl.addEventListener('click', () => {
      homeBnbSLider.disable();
      homeBusdSLider.disable();
      reinvestBnbSLider.disable();
      reinvestBusdSLider.disable();
   });
}
