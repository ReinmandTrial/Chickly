const newChickListArr = document.querySelectorAll('.replenishment__item');
if (newChickListArr.length !== 0) {
   const seeMoreBtn = document.querySelector('.replenishment__button');
   seeMoreBtn.addEventListener('click', openChunk);
   let i;

   initNewChick();

   function initNewChick() {
      for (i = 0; i < (newChickListArr.length > 6 ? 6 : newChickListArr.length); i++) {
         const element = newChickListArr[i];
         element.classList.add('active', 'see');
      }
      if (newChickListArr.length <= 6) {
         hiddenBtn();
      }
   }

   function hiddenBtn() {
      seeMoreBtn.classList.add('_hidden');
   }

   function openChunk() {
      const itemIsHidden = newChickListArr.length - document.querySelectorAll('.replenishment__item.active').length;
      const needRender = i + 6;
      if (itemIsHidden > 6) {
         for (i; i < needRender; i++) {
            const element = newChickListArr[i];
            element.classList.add('active');
            setTimeout(() => {
               element.classList.add('see');
            }, 100);
         }
      } else {
         const lastRender = i + itemIsHidden;
         for (i; i < lastRender; i++) {
            const element = newChickListArr[i];
            element.classList.add('active');
            setTimeout(() => {
               element.classList.add('see');
            }, 0);
         }
         hiddenBtn();
      }
   }
}
