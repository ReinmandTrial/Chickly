import {
   ChicklyW3,
   round,
   RPC_API,
   CHAIN_ID,
   BSCSCAN,
   CONTRACT_ADDR,
   BUSD_CONTRACT_ADDR,
   chickly_abi,
   busd_abi,
   nft_plans,
   plans,
} from '../utility/common.js';

import Web3 from 'web3';

const update_deposits = async (userInfo) => {
   if (!window.chickly.is_connected) return;
   document.querySelector('.active-nft-section').style.display = 'none';
   try {
      const contract = new window.chickly.web3.eth.Contract(chickly_abi, CONTRACT_ADDR);
      const result = await contract.methods.getDepositsInfo(window.chickly.accounts[0]).call();
      var data = [];
      var last_deposit = 'no deposit';
      for (var i = 0; i < result[0].length; i++) {
         const datetime = new Date(result['startUnix'][i] * 1000);
         last_deposit = datetime.toLocaleString();
         if (result['active'][i])
            data.push({
               active: result['active'][i],
               amount: result['amount'][i],
               finishAmount: round(result['finishAmount'][i]),
               accrued: round(result['totalAccrued'][i]),
               plan: result['plan'][i],
               currency: nft_plans[result['plan'][i]]['currency'],
               name: nft_plans[result['plan'][i]]['name'],
               price: nft_plans[result['plan'][i]]['price'],
               profit: nft_plans[result['plan'][i]]['profit'],
               nft: nft_plans[result['plan'][i]]['nft'],
               remaining: round(result['remaining'][i]),
               startUnix: result['startUnix'][i],
               date: datetime.toLocaleDateString(),
               time: datetime.toLocaleTimeString(),
            });
      }
      document.querySelector('[data-field="lastDateDeposit"]').textContent = last_deposit;
      if (data.length > 0) {
         let id = 0;
         document.querySelector('[data-colections="active-nft"]').innerHTML =
            '<tr><th></th><th></th><th></th><th>Progress</th><th>Accrued</th><th>Daily profit</th><th>Date</th></tr>' +
            data
               .map((item) => {
                  id++;
                  return `<tr>
        <td class="id">${id}</td>
        <td class="icon"><div><img src="/img/${item.nft}" alt="${item.nft}"/></div></td>
        <td class="title">${item.name}<span class="price"><span class="active-icon-currency">${icons[item.currency]}</span>${round(
                     item.amount
                  )}</span></td>
        <td class="progress"><progress id="file" max="100" value="${Math.round((item.accrued * 100) / item.finishAmount)}"> ${
                     item.accrued
                  }</progress></td>
        <td class="accrued" align=center>${item.accrued}</td>
        <td class="profit" align=center>
            <div><span class="active-icon-currency">${icons[item.currency]}</span></div>
            <div> ${Number((round(item.amount) * userInfo.userPercent) / 10000).toFixed(4)}</div>
        </td>
        <td align=center><div class="date">${icons['day']} ${item.date}</div><div class="date">${icons['time']} ${
                     item.time
                  }</div></td></tr>`;
               })
               .reverse()
               .join('');
         document.querySelector('.active-nft-section').style.display = '';
      }
   } catch (e) {
      console.log(e);
   }
};

export const update_counters = async () => {
   const web3 = new Web3(RPC_API);
   const contract = new web3.eth.Contract(chickly_abi, CONTRACT_ADDR);
   const result = await contract.methods.getSiteInfo().call();
   document.querySelector('[data-field="contract-profit"]').textContent = Number(result['contractBonus'] / 100).toFixed(2);
};

function fallbackCopyTextToClipboard(text) {
   var textArea = document.createElement('textarea');
   textArea.value = text;

   // Avoid scrolling to bottom
   textArea.style.top = '0';
   textArea.style.left = '0';
   textArea.style.position = 'fixed';
   document.body.appendChild(textArea);
   textArea.focus();
   textArea.select();
   try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
   } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
   }
   document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
   if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
   }
   navigator.clipboard.writeText(text).then(
      function () {
         console.log('Async: Copying to clipboard was successful!');
      },
      function (err) {
         console.error('Async: Could not copy text: ', err);
      }
   );
}

export const copytext = async () => {
   copyTextToClipboard(document.querySelector('.copy-text').textContent);
};

const getCurrency = () => {
   const currency = document.querySelector('.currency-switcher li.active').attributes['data-currency'].value;
};
const setCurrency = async (currency) => {
   document.querySelector('.currency-switcher li[data-currency="busd"]').classList.remove('active');
   document.querySelector('.currency-switcher li[data-currency="bnb"]').classList.remove('active');
   document.querySelector('.currency-switcher li[data-currency="' + currency + '"]').classList.add('active');

   const rendered_plans = plans[currency].map((item) => {
      return `<div class="nft-item">
           <div class="nft-image">
            <img src="/img/${item.nft}" alt="${item.nft}"/>
           </div>
           <div class="nft-price">
            <span class="active-icon-currency">${icons[currency]}</span>${item.price}
           </div>
           <div class="nft-profit">${item.profit}% <span id = homeItemProfit${item.profit}>profit</span></div>
            <input data-placeholder type="number" id="nft_count_${item.plan}" class="nft-count homeItemInput${item.profit}" placeholder="Enter amount" min=0
                 value=""/ onchange="document.querySelector(this.attributes['target-span'].value).textContent=Number(this.attributes['price'].value * this.value).toFixed(2)"
                 target-span="#value${item.plan}" price=${item.price}>
            <div class="nft-buy-price">
              <span id="value${item.plan}">0</span>
              <button id ='homeItemButton${item.profit}' type="submit" class="btn btn-green nft-buy-button nft-buy" onclick="document.buyNFT(this)" plan_id="${item.plan}" price="${item.price}">Buy</button>
            </div>
          </div>`;
   });
   document.querySelector('[data-colections="nft"]').innerHTML = rendered_plans.join('');
};

function getCookie(cname) {
   let name = cname + '=';
   let decodedCookie = decodeURIComponent(document.cookie);
   let ca = decodedCookie.split(';');
   for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
         c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
         return c.substring(name.length, c.length);
      }
   }
   return '';
}

window.addEventListener('load', async () => {
   document.querySelectorAll('.copy.btn.btn-green')[0].onclick = copytext;
   setCurrency('bnb');
   window.chickly = new ChicklyW3();
   document.querySelector('.currency-switcher li[data-currency="bnb"]').onclick = async () => {
      setCurrency('bnb');
      await window.chickly.update_balance();
   };
   document.querySelector('.currency-switcher li[data-currency="busd"]').onclick = async () => {
      setCurrency('busd');
      await window.chickly.update_balance();
   };
   document.update_deposits = update_deposits;
   await window.chickly.connect();
   const user_info = await window.chickly.update_balance();
   await update_deposits(user_info);
});

const allCopyBtn = document.querySelectorAll('.copy.btn.btn-green');
allCopyBtn.forEach((button) => {
   button.addEventListener('click', copyText);
});
const copiedLabel = document.querySelector('.copied');

function copyText() {
   copiedLabel.classList.add('_active');
   setTimeout(() => {
      copiedLabel.classList.remove('_active');
   }, 2000);
}
