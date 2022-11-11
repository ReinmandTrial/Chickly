import {
   ChicklyW3,
   round,
   round2,
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

window.revive = async (plan_id, value, deposit_id) => {
   try {
      if (!window.chickly.is_connected) return;
      const contract = new window.chickly.web3.eth.Contract(chickly_abi, CONTRACT_ADDR);
      if (plan_id < 4) {
         const gas = await contract.methods.revive(deposit_id).estimateGas({ from: window.chickly.accounts[0], value: value });
         const result = await contract.methods.revive(deposit_id).send({ from: window.chickly.accounts[0], value: value, gas: gas });
      } else {
         console.log(plan_id, value, deposit_id);
         const busd_contract = new window.chickly.web3.eth.Contract(busd_abi, BUSD_CONTRACT_ADDR);
         await busd_contract.methods.approve(CONTRACT_ADDR, value).send({ from: window.chickly.accounts[0] });
         const result = await contract.methods.revive(deposit_id).send({ from: window.chickly.accounts[0] });
      }

      window.chickly.update_balance();
   } catch (e) {
      console.log(e);
      alert(e.message);
   }
};

const update_deposits = async (userInfo) => {
   if (!window.chickly.is_connected) return;
   try {
      const contract = new window.chickly.web3.eth.Contract(chickly_abi, CONTRACT_ADDR);
      const result = await contract.methods.getDepositsInfo(window.chickly.accounts[0]).call();
      var data = [];
      var last_deposit = 'no deposit';
      for (var i = 0; i < result[0].length; i++) {
         const datetime = new Date(result['startUnix'][i] * 1000);
         last_deposit = datetime.toLocaleString();
         if (!result['active'][i])
            data.push({
               deposit_id: i,
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
      if (data.length > 0) {
         let id = 0;
         document.querySelector('.nft-items.trade-in').innerHTML = data
            .map((item) => {
               id++;
               return `<div class="nft-item">
                        <div class="discount">
                            <span>-10%</span>
                        </div>
                        <div class="nft-image">
                            <img src="/img/old/${(item.plan % 5) + 1}.png" alt="${item.nft}" width="124px" height="124px"/>
                        </div>
                        <div class="nft-price">
                            <span class="old-price">${round(item.amount)}$</span>
                            <span class="new-price">
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.7468 11.4861C31.0724 17.2462 29.0989 24.6118 23.3387 27.9375C17.5785 31.2631 10.2129 29.2894 6.88732 23.5293C3.56169 17.7692 5.53528 10.4036 11.2955 7.078C17.0556 3.75235 24.4212 5.72593 27.7468 11.4861Z" fill="url(#paint0_linear_444_52148)"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.2959 11.1695C31.7966 17.2328 29.7191 24.9861 23.6557 28.4867C17.5924 31.9874 9.8392 29.9099 6.33853 23.8466C2.83785 17.7832 4.91532 10.0301 10.9787 6.52939C17.042 3.02872 24.7952 5.10613 28.2959 11.1695ZM23.3388 27.9378C29.099 24.6121 31.0725 17.2465 27.747 11.4864C24.4213 5.72624 17.0558 3.75267 11.2956 7.07831C5.5354 10.404 3.56181 17.7695 6.88746 23.5297C10.213 29.2898 17.5786 31.2634 23.3388 27.9378Z" fill="url(#paint1_linear_444_52148)"></path>
                                <path d="M21.7249 15.9683L20.3821 17.3112L21.7249 18.6542L23.0681 17.3112L21.7249 15.9683Z" fill="url(#paint2_linear_444_52148)"></path>
                                <path d="M12.7887 15.969L11.4458 17.312L12.7887 18.6549L14.1319 17.312L12.7887 15.969Z" fill="url(#paint3_linear_444_52148)"></path>
                                <path d="M17.2067 20.3719L14.998 18.0908L13.6653 19.4667L17.2067 23.1236L20.7487 19.4667L19.416 18.0908L17.2067 20.3719Z" fill="url(#paint4_linear_444_52148)"></path>
                                <path d="M17.2067 14.1321L19.416 16.4131L20.7487 15.0373L17.2067 11.3804L13.6653 15.0373L14.998 16.4131L17.2067 14.1321Z" fill="url(#paint5_linear_444_52148)"></path>
                                <path d="M17.2559 15.9856L15.9299 17.3117L17.2559 18.6379L18.5823 17.3117L17.2559 15.9856Z" fill="url(#paint6_linear_444_52148)"></path>
                                <defs>
                                    <linearGradient id="paint0_linear_444_52148" x1="6.6704" y1="9.63042" x2="5.45209" y2="32.2902" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F0DA15"></stop>
                                        <stop offset="0.835592" stop-color="#D86800"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_444_52148" x1="6.11018" y1="9.21616" x2="4.82773" y2="33.0685" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFF494"></stop>
                                        <stop offset="0.63021" stop-color="#FFD4AD"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_444_52148" x1="17.2568" y1="11.3805" x2="17.2568" y2="23.1235" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" stop-opacity="0.99"></stop>
                                        <stop offset="1" stop-color="white" stop-opacity="0.49"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_444_52148" x1="17.2567" y1="11.3804" x2="17.2567" y2="23.1235" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" stop-opacity="0.99"></stop>
                                        <stop offset="1" stop-color="white" stop-opacity="0.49"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_444_52148" x1="17.2568" y1="11.3805" x2="17.2568" y2="23.1236" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" stop-opacity="0.99"></stop>
                                        <stop offset="1" stop-color="white" stop-opacity="0.49"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_444_52148" x1="17.2568" y1="11.3804" x2="17.2568" y2="23.1234" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" stop-opacity="0.99"></stop>
                                        <stop offset="1" stop-color="white" stop-opacity="0.49"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint6_linear_444_52148" x1="17.2568" y1="11.3802" x2="17.2568" y2="23.1232" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" stop-opacity="0.99"></stop>
                                        <stop offset="1" stop-color="white" stop-opacity="0.49"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                            ${round2(Number(round(item.amount.toString())) * 0.9)}
                            </span>
                        </div>
                        <div class="nft-profit">
                            +${item.profit}% profit
                        </div>
                        <form class="nft-buy">
                            <button type="submit" class="btn btn-green" onclick='window.revive(${item.plan},"${web3.utils.toWei(
                  round2(Number(round(item.amount.toString())) * 0.9).toString()
               )}",${item.deposit_id}); return false;'>Activate</button>
                        </form>
                    </div>`;
            })
            .join('');
         document.querySelector('.nft-items.trade-in').style.display = '';
      }
   } catch (e) {
      console.log(e);
   }
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
   await window.chickly.connect();
   const user_info = await window.chickly.update_balance();
   await update_deposits();
});
