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

const update_deposits = async () => {
   if (!window.chickly.is_connected) return;

   try {
      const contract = new window.chickly.web3.eth.Contract(chickly_abi, CONTRACT_ADDR);
      const result = await contract.methods.getDepositsInfo(window.chickly.accounts[0]).call();
      var data = [];
      var last_deposit = 'no deposit';
      for (var i = 0; i < result[0].length; i++) {
         const datetime = new Date(result['startUnix'][i] * 1000);
         (last_deposit = datetime.toLocaleString()),
            data.push({
               active: result['active'][i],
               amount: result['amount'][i],
               finishAmount: result['finishAmount'][i],
               accrued: round(result['totalAccrued'][i]),
               plan: result['plan'][i],
               currency: nft_plans[result['plan'][i]]['currency'],
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
   } catch (e) {
      console.log(e);
   }
};

let last_block = 0;

const load_events = async (toBlock) => {
   const web3 = new Web3(RPC_API);
   const contract = new web3.eth.Contract(chickly_abi, CONTRACT_ADDR);
   const events = await contract.getPastEvents('allEvents', { fromBlock: toBlock - 4000, toBlock: toBlock });
   const return_events = [];
   for (let event_id = 0; event_id < events.length; event_id++) {
      const event = events[event_id];
      const block = await web3.eth.getBlock(event['blockNumber']);
      const d = new Date(block.timestamp * 1000);
      const date =
         (d.getDate() < 10 ? '0' + d.getDate() : d.getDate()) +
         '.' +
         (d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1) +
         '.' +
         d.getFullYear();
      const time =
         (d.getHours() < 10 ? '0' + d.getHours() : d.getHours()) +
         ':' +
         (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()) +
         ':' +
         (d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds());
      const e = document.createElement('div');
      e.classList.add('referrals-block__item');
      e.classList.add('referral-item');
      const uri = BSCSCAN + '/tx/' + event.transactionHash;
      if (
         event.event == 'RefBonus' &&
         event.returnValues.referrer &&
         window.chickly.accounts[0].toLowerCase() == event.returnValues.referrer.toLowerCase()
      ) {
         return_events.push(event);
         e.innerHTML = `<p class="referral-item__address"><a href="${uri}">${event.returnValues.referral}</a></p>
                                    <p class="referral-item__level">${1 + Number(event.returnValues.level)}</p>
                                    <p class="referral-item__bonus">${round(event.returnValues.amount)}</p>
                                    <div class="referral-item__date-time">
                                        <p class="referral-item__date"><span class="js-icon" data-svg='day'></span><span>${date}</span></p>
                                        <p class="referral-item__time"><span class="js-icon" data-svg='time'></span><span>${time}</span></p>
                                    </div>`;
         document.querySelector('.referrals-block__list').prepend(e);
         document.querySelectorAll('body .js-icon').forEach((e) => (e.innerHTML = icons[e.attributes['data-svg'].value]));
      }
   }
   return return_events;
};

let is_loading_events = 0;

export const update_events = async () => {
   if (is_loading_events) return;
   is_loading_events = 1;

   const web3 = new Web3(RPC_API);
   const contract = new web3.eth.Contract(chickly_abi, CONTRACT_ADDR);
   last_block = await web3.eth.getBlockNumber();
   let events = [];
   let indx = 0;
   while (events.length < 6 && indx < 50) {
      events = await load_events(last_block);
      last_block -= 4000;
      indx++;
   }
   is_loading_events = 0;
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

window.addEventListener('load', async () => {
   window.chickly = new ChicklyW3();

   document.querySelectorAll('.copy.btn.btn-green')[0].onclick = copytext;
   document.querySelectorAll('.copy.btn.btn-green')[1].onclick = copytext;
   await window.chickly.connect();
   const user_info = await window.chickly.update_balance();
   await update_deposits();
   update_events();
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
