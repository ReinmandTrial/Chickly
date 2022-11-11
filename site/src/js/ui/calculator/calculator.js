const MAIN_CALC_EL = document.getElementById('interestScreme');
if (MAIN_CALC_EL) {
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
      calcBnbResultEl.textContent = 1.15;
      calcDaysResultEl.textContent = 0.1;
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
      let bnbResult = 1;
      const stepsNow = stepsCounter(resultBnb);
      firstStep();
      calcBnbResultEl.textContent = bnbResult.toFixed(3);
      calcTotalPercent();

      function firstStep() {
         let curVal = stepsNow.get();
         if (curVal >= 7) {
            bnbResult += 1.05;
            stepsNow.sub(7);
            secondStep();
         } else {
            bnbResult += curVal * 0.15;
         }
      }
      function secondStep() {
         let curVal = stepsNow.get();
         if (curVal >= 14) {
            bnbResult += 0.98;
            stepsNow.sub(14);
            thirdStep();
         } else {
            bnbResult += curVal * 0.07;
         }
      }
      function thirdStep() {
         let curVal = stepsNow.get();
         if (curVal >= 28) {
            bnbResult += 0.98;
            stepsNow.sub(28);
            fourthStep();
         } else {
            bnbResult += curVal * 0.035;
         }
      }
      function fourthStep() {
         let curVal = stepsNow.get();
         if (curVal >= 50) {
            bnbResult += 1;
            stepsNow.sub(50);
            fifthStep();
         } else {
            bnbResult += curVal * 0.02;
         }
      }
      function fifthStep() {
         let curVal = stepsNow.get();
         bnbResult += curVal * 0.01;
      }
   }

   function stepsCounter(val) {
      let result = val;
      return {
         sub: (n) => (result -= n),
         get: () => result,
      };
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
      calcDaysResultEl.textContent = resultDays.toFixed(3);
      calcTotalPercent();
   }
   //========================================================================================================================================================

   //========================================================================================================================================================

   function calcTotalPercent() {
      const resultPercent = +calcBnbResultEl.textContent + +calcDaysResultEl.textContent;
      calcTotalPercentEl.textContent = resultPercent.toFixed(3);
      calcDailyProfit();
   }

   //========================================================================================================================================================
   calcInvestmentSumInputEl.addEventListener('input', calcDailyProfit);

   function calcDailyProfit() {
      const profit = (calcInvestmentSumInputEl.value / 100) * +calcTotalPercentEl.textContent;
      calcProfitSumEl.textContent = `${profit.toFixed(3)}$`;
   }

   //calc END========================================================================================================================================================
}
