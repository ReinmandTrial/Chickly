import Web3 from 'web3';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3Modal from 'web3modal';
import chicklyAbi from '../../../files/chickly.json';
import busdAbi from '../../../files/busd.json';

export const CHAIN_ID = '0x61';
export const BSCSCAN = 'https://testnet.bscscan.com';
export const CONTRACT_ADDR = '0x44DDd0FFFce07F66c24a018b6758631734ff0bae';
export const BUSD_CONTRACT_ADDR = '0x855AEab1AB7E7d56CE9f249a86FDC412AA2c2BA4';
export const RPC_API = 'https://data-seed-prebsc-1-s3.binance.org:8545';
export const chickly_abi = chicklyAbi;
export const busd_abi = busdAbi;

export const nft_plans = [
   {
      currency: 'bnb',
      price: 0.04,
      profit: 170,
      nft: 'nft-1.svg',
      plan: 0,
      name: 'Bennie',
   },
   {
      currency: 'bnb',
      price: 0.4,
      profit: 180,
      nft: 'nft-2.svg',
      plan: 1,
      name: 'Salsa',
   },
   {
      currency: 'bnb',
      price: 2,
      profit: 190,
      nft: 'nft-3.svg',
      plan: 2,
      name: 'Fluffy',
   },
   {
      currency: 'bnb',
      price: 12,
      profit: 200,
      nft: 'nft-4.svg',
      plan: 3,
      name: 'Zazu',
   },
   {
      price: 40,
      currency: 'bnb',
      profit: 220,
      nft: 'nft-5.svg',
      plan: 4,
      name: 'Goldie',
   },
   {
      currency: 'busd',
      price: 10,
      profit: 170,
      nft: 'nft-1.svg',
      plan: 5,
      name: 'Bennie',
   },
   {
      currency: 'busd',
      price: 100,
      profit: 180,
      nft: 'nft-2.svg',
      plan: 6,
      name: 'Salsa',
   },
   {
      currency: 'busd',
      price: 500,
      profit: 190,
      nft: 'nft-3.svg',
      plan: 7,
      name: 'Fluffy',
   },
   {
      currency: 'busd',
      price: 3000,
      profit: 200,
      nft: 'nft-4.svg',
      plan: 8,
      name: 'Zazu',
   },
   {
      currency: 'busd',
      price: 10000,
      profit: 220,
      nft: 'nft-5.svg',
      plan: 9,
      name: 'Goldie',
   },
];

export const plans = {
   bnb: [
      {
         price: 0.04,
         profit: 170,
         nft: 'nft-1.svg',
         plan: 0,
      },
      {
         price: 0.4,
         profit: 180,
         nft: 'nft-2.svg',
         plan: 1,
      },
      {
         price: 2,
         profit: 190,
         nft: 'nft-3.svg',
         plan: 2,
      },
      {
         price: 12,
         profit: 200,
         nft: 'nft-4.svg',
         plan: 3,
      },
      {
         price: 40,
         profit: 220,
         nft: 'nft-5.svg',
         plan: 4,
      },
   ],
   busd: [
      {
         price: 10,
         profit: 170,
         nft: 'nft-1.svg',
         plan: 5,
      },
      {
         price: 100,
         profit: 180,
         nft: 'nft-2.svg',
         plan: 6,
      },
      {
         price: 500,
         profit: 190,
         nft: 'nft-3.svg',
         plan: 7,
      },
      {
         price: 3000,
         profit: 200,
         nft: 'nft-4.svg',
         plan: 8,
      },
      {
         price: 10000,
         profit: 220,
         nft: 'nft-5.svg',
         plan: 9,
      },
   ],
};

export const round = (bignumber) => {
   const number = Web3.utils.fromWei(bignumber);
   if (number == 0) return '0.0';
   if (number >= 10) return Math.round(number);
   if (number < 10 && number >= 0.1) return Number(number).toFixed(2);
   if (number < 0.00001) return Number(number).toFixed(7);
   if (number < 0.0001) return Number(number).toFixed(6);
   if (number < 0.001) return Number(number).toFixed(5);
   if (number < 0.01) return Number(number).toFixed(4);
   if (number < 0.1) return Number(number).toFixed(3);
};

export const round2 = (number) => {
   if (number == 0) return '0.0';
   if (number >= 10) return Math.round(number);
   if (number < 10 && number >= 0.1) return Number(number).toFixed(2);
   if (number < 0.00001) return Number(number).toFixed(7);
   if (number < 0.0001) return Number(number).toFixed(6);
   if (number < 0.001) return Number(number).toFixed(5);
   if (number < 0.01) return Number(number).toFixed(4);
   if (number < 0.1) return Number(number).toFixed(3);
};

export class ChicklyW3 {
   constructor() {
      this.web3 = {};
      this.web3Modal = '';
      this.provider = '';
      this.is_connected = 0;
      this.accounts = [];
      this.next_feed = 0;
      this.update_feed = '';
      this.onconnect = this.onConnectDefault;
      this.ondisconnect = this.onDisconnectDefault;

      window.modal = document.getElementById('withdrawModal');

      document.getElementById('withdrawPopupCancelBtn').onclick = () => {
         window.modal.classList.remove('_active');
      };

      document.getElementById('close_button').onclick = () => {
         window.modal.classList.remove('_active');
      };

      window.onclick = function (event) {
         if (event.target == window.modal) {
            window.modal.classList.remove('_active');
         }
      };
      document.getElementById('headerExit').onclick = this.disconnect;

      document.getElementById('withdrawPopupConfirmBtn').onclick = this.withdraw;
      document.buyNFT = this.buyNFT;
      if (document.querySelector('#feed_button')) {
         document.querySelector('#feed_button').onclick = this.feed;
      }

      document.querySelector('#withdraw1').onclick = () => {
         this.show_modal('bnb', 'invest');
      };
      document.querySelector('#withdraw2').onclick = () => {
         this.show_modal('busd', 'invest');
      };
      document.querySelector('#withdraw3').onclick = () => {
         this.show_modal('bnb', 'bonus');
      };
      document.querySelector('#withdraw4').onclick = () => {
         this.show_modal('busd', 'bonus');
      };
   }

   calculateTime(period) {
      let hours = Math.floor((period % (60 * 60 * 24)) / (60 * 60)),
         minutes = Math.floor((period % (60 * 60)) / 60),
         seconds = Math.floor(period % 60),
         time =
            (hours < 10 ? '0' + hours : hours) +
            ':' +
            (minutes < 10 ? '0' + minutes : minutes) +
            ':' +
            (seconds < 10 ? '0' + seconds : seconds);
      return time;
   }

   async onConnectDefault() {
      this.update_balance();
   }

   async onDisconnectDefault() {}

   async connect() {
      try {
         const options = new WalletConnectProvider({
            infuraId: '650a274f648a4bcc8b48c14a088bd7bf',
            rpc: { CHAIN_ID: RPC_API },
            qrcodeModalOptions: {
               desktopLinks: [
                  'ledger',
                  'tokenary',
                  'wallet',
                  'wallet 3',
                  'secuX',
                  'ambire',
                  'wallet3',
                  'apolloX',
                  'zerion',
                  'sequence',
                  'punkWallet',
                  'kryptoGO',
                  'nft',
                  'riceWallet',
                  'vision',
                  'keyring',
               ],
               mobileLinks: ['rainbow', 'metamask', 'argent', 'trust', 'imtoken', 'pillar'],
            },
         });
         const providerOptions = {
            walletconnect: {
               package: WalletConnectProvider, // required
               options: options,
            },
         };
         this.web3Modal = new Web3Modal({
            network: 'mainnet',
            cacheProvider: true,
            providerOptions,
         });

         this.provider = await this.web3Modal.connect();
         this.web3 = new Web3(this.provider);
         window.web3 = this.web3;
         this.accounts = await this.web3.eth.getAccounts();
         this.is_connected = 1;
         this.onconnect();
      } catch (e) {
         console.log(e);
      }
   }

   async disconnect(e) {
      window.localStorage.removeItem('WEB3_CONNECT_CACHED_PROVIDER');
      //await web3Modal.clearCachedProvider()
      window.chickly.provider = null;
      window.chickly.web3 = null;
      window.chickly.ondisconnect();
      window.location.href = '/';
   }

   async update_balance() {
      if (!window.chickly.is_connected) return;
      const contract = new window.chickly.web3.eth.Contract(chickly_abi, CONTRACT_ADDR);
      const busd_contract = new window.chickly.web3.eth.Contract(busd_abi, BUSD_CONTRACT_ADDR);

      document.querySelector('[data-field="account"]').textContent = window.chickly.accounts[0];

      document.querySelector('[data-field="balance-bnb"]').textContent = round(
         await window.chickly.web3.eth.getBalance(window.chickly.accounts[0])
      );

      document.querySelector('[data-field="balance-busd"]').textContent = round(
         await busd_contract.methods.balanceOf(window.chickly.accounts[0]).call()
      );

      const result = await contract.methods.getUserInfo(window.chickly.accounts[0]).call();
      const result2 = await contract.methods.getRefInfo(window.chickly.accounts[0]).call();

      var elements = [];
      document.querySelectorAll('[data-field]').forEach((e) => {
         elements.push(e.attributes['data-field'].value);
      });

      document.querySelector('[data-field="general-profit"]').textContent = Number(result['userPercent'] / 100).toFixed(2);
      document.querySelector('[data-field="hold-profit"]').textContent = Number(result['holdBonus'] / 100).toFixed(2);
      document.querySelector('[data-field="investment-bnb"]').textContent = round(result['available'][0]);
      document.querySelector('[data-field="investment-busd"]').textContent = round(result['available'][1]);

      document.querySelector('[data-field="bonus-bnb"]').textContent = round(result2['bonus'][0]);
      document.querySelector('[data-field="bonus-busd"]').textContent = round(result2['bonus'][1]);

      document.querySelector('[data-field="amountOfDeposits"]').textContent = result['amountOfDeposits'];

      document.querySelector('[data-field="invested-bnb"]').textContent = round(result['invested'][0]);
      document.querySelector('[data-field="invested-busd"]').textContent = round(result['invested'][1]);
      document.querySelector('[data-field="earned-bnb"]').textContent =
         Number(round(result['totalAccrued'][0])) +
         Number(result2['totalBonuses'].slice(0, 3).reduce((p, n) => Number(p) + Number(round(n)), 0));
      document.querySelector('[data-field="earned-busd"]').textContent =
         Number(round(result['totalAccrued'][1])) +
         Number(result2['totalBonuses'].slice(3).reduce((p, n) => Number(p) + Number(round(n)), 0));
      document.querySelector('[data-field="withdrawn-bnb"]').textContent =
         result2['totalBonuses'].slice(0, 3).reduce((p, n) => Number(p) + Number(round(n)), 0) +
         Number(round(result['withdrawn'][0])) -
         Number(round(result2['bonus'][0]));
      document.querySelector('[data-field="withdrawn-busd"]').textContent =
         result2['totalBonuses'].slice(3).reduce((p, n) => Number(p) + Number(round(n)), 0) +
         Number(round(result['withdrawn'][1])) -
         Number(round(result2['bonus'][1]));

      document.querySelector('[data-field="partner-link"]').textContent = window.location.origin + '/?ref=' + window.chickly.accounts[0];

      document.nft_referrer = result2['referrer'] != '0x0000000000000000000000000000000000000000' ? result2['referrer'] : '';

      if (document.querySelector('.nft-feed .next-feed')) {
         clearInterval(document.update_feed);
         document.querySelector('[data-field="next-feed"]').textContent = window.chickly.calculateTime(result['nextFeed']);
         window.chickly.next_feed = result['nextFeed'];
         if (result['nextFeed'] == 0) {
            document.querySelector('.nft-feed .next-feed').removeAttribute('disabled');
            clearInterval(document.update_feed);
         } else {
            document.querySelector('.nft-feed .next-feed').setAttribute('disabled', 'disabled');

            document.update_feed = setInterval(() => {
               window.chickly.next_feed--;
               if (window.chickly.next_feed < 0) {
                  document.querySelector('.nft-feed .next-feed').removeAttribute('disabled');
                  clearInterval(document.update_feed);
                  return;
               }

               document.querySelector('[data-field="next-feed"]').textContent = window.chickly.calculateTime(window.chickly.next_feed);
            }, 1000);
         }
      }

      if (document.querySelector('#ref_count')) {
         document.querySelectorAll('#ref_count')[0].textContent = result2['referals'][0];
         document.querySelectorAll('#ref_count')[1].textContent = result2['referals'][1];
         document.querySelectorAll('#ref_count')[2].textContent = result2['referals'][2];

         //    document.querySelector('#raised_bnb').textContent= round(result2['bonus'][0])
         //    document.querySelector('#raised_busd').textContent= round(result2['bonus'][1])
         document.querySelector('#total_bonus_bnb').textContent =
            Number(round(result2['totalBonuses'][0])) +
            Number(round(result2['totalBonuses'][1])) +
            Number(round(result2['totalBonuses'][2]));
         document.querySelector('#total_bonus_busd').textContent =
            Number(round(result2['totalBonuses'][3])) +
            Number(round(result2['totalBonuses'][4])) +
            Number(round(result2['totalBonuses'][5]));
         document.querySelectorAll('[data-field="partner-link"]')[1].textContent =
            window.location.origin + '/?ref=' + window.chickly.accounts[0];

         document.querySelector('.bonus-percent').textContent =
            7 +
            Math.round(
               ((Number(round(result2['totalBonuses'][0])) +
                  Number(round(result2['totalBonuses'][1])) +
                  Number(round(result2['totalBonuses'][2]))) *
                  250 +
                  (Number(round(result2['totalBonuses'][3])) +
                     Number(round(result2['totalBonuses'][4])) +
                     Number(round(result2['totalBonuses'][5])))) /
                  500
            ) +
            '%';
      }

      const result3 = await contract.methods.getSiteInfo().call();
      document.querySelector('[data-field="contract-profit"]').textContent = Number(result3['contractBonus'] / 100).toFixed(2);
      return result;
   }

   async withdraw(e) {
      try {
         if (!window.chickly.is_connected) return;
         const contract = new window.chickly.web3.eth.Contract(chickly_abi, CONTRACT_ADDR);
         const value = Web3.utils.toWei(document.getElementById('withdraw_amount').value);
         const currency = e.target.attributes['currency'].value;
         const target = e.target.attributes['target'].value;
         let gas = 0;
         if (currency == 'bnb' && target == 'invest') {
            gas = await contract.methods.withdraw([value, 0], [0, 0]).estimateGas({ from: window.chickly.accounts[0] });
            await contract.methods.withdraw([value, 0], [0, 0]).send({ from: window.chickly.accounts[0], gas: gas });
         } else if (currency == 'bnb' && target == 'bonus') {
            gas = await contract.methods.withdraw([0, 0], [value, 0]).estimateGas({ from: window.chickly.accounts[0] });
            await contract.methods.withdraw([0, 0], [value, 0]).send({ from: window.chickly.accounts[0], gas: gas });
         } else if (currency == 'busd' && target == 'invest') {
            gas = await contract.methods.withdraw([0, value], [0, 0]).estimateGas({ from: window.chickly.accounts[0] });
            await contract.methods.withdraw([0, value], [0, 0]).send({ from: window.chickly.accounts[0], gas: gas });
         } else if (currency == 'busd' && target == 'bonus') {
            gas = await contract.methods.withdraw([0, 0], [0, value]).estimateGas({ from: window.chickly.accounts[0] });
            await contract.methods.withdraw([0, 0], [0, value]).send({ from: window.chickly.accounts[0], gas: gas });
         } else throw Exception({ message: 'Withdraw error' });

         window.chickly.update_balance();
         modal.classList.remove('_active');
      } catch (e) {
         console.log(e);
         alert(e.message);
      }
   }

   async feed() {
      try {
         if (!window.chickly.is_connected) return;
         const contract = new window.chickly.web3.eth.Contract(chickly_abi, CONTRACT_ADDR);
         const gas = await contract.methods.feed().estimateGas({ from: window.chickly.accounts[0] });
         const result = await contract.methods.feed().send({ from: window.chickly.accounts[0], gas: gas });
         window.chickly.update_balance();
         document.querySelector('.successful-feed').classList.add('_active');
         setTimeout(() => {
            document.querySelector('.successful-feed').classList.remove('_active');
         }, 5000);
      } catch (e) {
         console.log(e);
         alert(e.message);
      }
   }

   show_modal(currency, target) {
      if (target == 'bonus') {
         document.querySelector('#withdrawPopupText').style.display = '';
      } else {
         document.querySelector('#withdrawPopupText').style.display = 'none';
      }
      document.getElementById('withdrawPopupConfirmBtn').setAttribute('currency', currency);
      document.getElementById('withdrawPopupConfirmBtn').setAttribute('target', target);
      document.getElementById('withdraw_currency').textContent = currency.toUpperCase();
      document.getElementById('withdraw_wallet').textContent = window.chickly.accounts[0];
      window.modal.classList.add('_active');
   }

   async buyNFT(target) {
      try {
         if (!window.chickly.is_connected) return;
         const plan_id = target.attributes.plan_id.value;
         const count = Number(document.getElementById('nft_count_' + plan_id).value);
         if (count < 1) throw { message: 'Count should be not zero' };
         const price = Number(target.attributes.price.value) * count;
         let referrer = localStorage.getItem('referrer');
         if (!referrer || referrer == 'null') {
            referrer = getCookie('referrer');
         }
         const contract = new window.chickly.web3.eth.Contract(chickly_abi, CONTRACT_ADDR);
         const value = Web3.utils.toWei(price.toString());
         if (plan_id < 5) {
            const gas = await contract.methods
               .buyNFT(plan_id, count, referrer && referrer != 'null' ? referrer : '0x0000000000000000000000000000000000000000')
               .estimateGas({ from: window.chickly.accounts[0], value: value.toString() });
            const result = await contract.methods
               .buyNFT(plan_id, count, referrer && referrer != 'null' ? referrer : '0x0000000000000000000000000000000000000000')
               .send({ from: window.chickly.accounts[0], value: value.toString(), gas: gas });
         } else {
            const busd_contract = new window.chickly.web3.eth.Contract(busd_abi, BUSD_CONTRACT_ADDR);
            const busd_balance = busd_contract.methods.balanceOf(window.chickly.accounts[0]).call();
            if (busd_balance < price) throw { message: 'Not enough BUSD' };
            const gas2 = await busd_contract.methods.approve(CONTRACT_ADDR, value).estimateGas({ from: window.chickly.accounts[0] });
            await busd_contract.methods.approve(CONTRACT_ADDR, value).send({ from: window.chickly.accounts[0], gas: gas2 });
            const gas = await contract.methods
               .buyNFT(plan_id, count, referrer && referrer != 'null' ? referrer : '0x0000000000000000000000000000000000000000')
               .estimateGas({ from: window.chickly.accounts[0] });
            const result = await contract.methods
               .buyNFT(plan_id, count, referrer && referrer != 'null' ? referrer : '0x0000000000000000000000000000000000000000')
               .send({ from: window.chickly.accounts[0], gas: gas });
         }
         const user_info = await window.chickly.update_balance();
         if (typeof document.update_deposits == 'function') document.update_deposits(user_info);
      } catch (e) {
         console.log(e);
         alert(e.message);
      }
   }
}

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
