import {
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
} from './common.js';

import Web3 from 'web3';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3Modal from 'web3modal';

let accounts = [];
export let is_connected = 0;
let web3 = null;

const update_balance = async () => {
   if (web3 == null) return;
   const user_balance = await web3.eth.getBalance(accounts[0]);
   document.getElementById('headerBtn').textContent =
      accounts[0].substr(0, 6) + '...' + accounts[0].substr(-4) + ' ' + round(user_balance) + ' BNB';
   document.querySelector('#cabinet_button').style.display = '';
   document.querySelector('#disconnect_button').style.display = '';
   if (document.getElementById('aboutBtnConnect')) {
      document.getElementById('howWorkItemBtn1').textContent = 'Cabinet';
      document.getElementById('aboutBtnConnect').textContent = 'Cabinet';

      document.getElementById('nftBuy1').textContent = 'Cabinet';
      document.getElementById('nftBuy2').textContent = 'Cabinet';
      document.getElementById('nftBuy3').textContent = 'Cabinet';
      document.getElementById('nftBuy4').textContent = 'Cabinet';
      document.getElementById('nftBuy5').textContent = 'Cabinet';
   }
};

let last_block = 0;

const load_events = async (toBlock) => {
   const web3 = new Web3(RPC_API);
   const contract = new web3.eth.Contract(chickly_abi, CONTRACT_ADDR);
   const events = await contract.getPastEvents('allEvents', { fromBlock: toBlock - 4000, toBlock: toBlock });
   events.forEach((event) => {
      const e = document.createElement('LI');
      e.classList.add('replenishment__item');
      e.classList.add('active');
      e.classList.add('see');
      const uri = BSCSCAN + '/tx/' + event.transactionHash;

      if (event.event == 'Withdrawn') {
         const amount = round(event.returnValues.dividendsBnb > 0 ? event.returnValues.dividendsBusd : event.returnValues.dividendsBusd);
         const currency = event.returnValues.bnb > 0 ? 'BNB' : 'BUSD';
         e.innerHTML = `<img src="/img/Home/replenishment/mini-chicken.png" width="32px" height="32px">
                    <p class="replenishment__price">Withdraw ${amount} ${currency}</p>
                      <div class="replenishment__bottom-row">
                        <p class="replenishment__code">${event.returnValues.user}</p>
                        <a href="${uri}" class="replenishment__link _icon-eye"></a>
                      </div>`;
         document.querySelector('ul.replenishment__list').append(e);
      } else if (event.event == 'NewDeposit') {
         const plan = nft_plans[event.returnValues.plan];
         e.innerHTML = `<img src="/img/nft-${(Number(event.returnValues.plan) % 5) + 1}.svg" width="32px" height="32px">
                    <p class="replenishment__price">Buy ${plan.price * event.returnValues.amount} ${plan['currency'].toUpperCase()}</p>
                      <div class="replenishment__bottom-row">
                        <p class="replenishment__code">${event.returnValues.user}</p>
                        <a href="${uri}" class="replenishment__link _icon-eye" target="_blank"></a>
                      </div>`;
         document.querySelector('ul.replenishment__list').append(e);
      }
   });
   return events;
};
let is_loading_events = 0;

export const next_events = async () => {
   if (is_loading_events) return;
   is_loading_events = 1;
   document.querySelector('#waiting').style.display = '';
   let indx = 0;
   let events = [];
   while (events.length < 6 && indx < 20) {
      events = await load_events(last_block);
      last_block -= 4000;
      indx++;
   }
   document.querySelector('#waiting').style.display = 'none';
   is_loading_events = 0;
};

export const update_events = async () => {
   if (is_loading_events) return;
   is_loading_events = 1;
   document.querySelector('#waiting').style.display = '';
   const web3 = new Web3(RPC_API);
   const contract = new web3.eth.Contract(chickly_abi, CONTRACT_ADDR);

   const siteInfo = await contract.methods.getSiteInfo().call();
   document.querySelector('#site_balance_bnb').textContent = round(siteInfo['balance'][0]);
   document.querySelector('#site_balance_busd').textContent = round(siteInfo['balance'][1]);
   document.querySelector('#site_users').textContent = siteInfo['totalUsers'];

   last_block = await web3.eth.getBlockNumber();
   let events = [];
   let indx = 0;
   while (events.length < 6 && indx < 20) {
      events = await load_events(last_block);
      last_block -= 4000;
      indx++;
   }
   document.querySelector('#waiting').style.display = 'none';
   is_loading_events = 0;
};

let web3Modal = '',
   provider = '';
export const disconnect = async (e) => {
   window.localStorage.removeItem('WEB3_CONNECT_CACHED_PROVIDER');
   await web3Modal.clearCachedProvider();
   provider = null;
   web3 = null;
   document.getElementById('headerBtn').textContent = 'Connect wallet';
   document.querySelector('#cabinet_button').style.display = 'none';
   document.querySelector('#disconnect_button').style.display = 'none';
};

export const connect = async (param) => {
   document.querySelector('#disconnect_button').style.display = 'none';
   try {
      //          const options = new WalletConnectProvider({
      const options = {
         network: 'mainnet',
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
      };
      const providerOptions = {
         walletconnect: {
            package: WalletConnectProvider, // required
            options: options,
         },
      };
      web3Modal = new Web3Modal({
         network: 'mainnet',
         cacheProvider: true,
         providerOptions,
      });

      provider = await web3Modal.connect();
      web3 = new Web3(provider);
      window.web3 = web3;
      accounts = await web3.eth.getAccounts();
      is_connected = 1;
   } catch (e) {
      console.log(e, param);
   }
   await update_balance();
};

export const update_counters = async () => {
   const web3 = new Web3(RPC_API);
   const contract = new web3.eth.Contract(chickly_abi, CONTRACT_ADDR);
   const result = await contract.methods.getSiteInfo().call();
   document.querySelector('#current_bonus').textContent = Number(result['contractBonus'] / 100).toFixed(2);
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

export const buyNFT = async (e) => {
   if (!is_connected) {
      await connect();
      if (!is_connected) return;
   }
   try {
      const plan_id = e.target.attributes.plan_id.value;
      const priceBNB = e.target.attributes.price.value;
      let referrer = localStorage.getItem('referrer');
      if (!referrer || referrer == 'null') {
         referrer = getCookie('referrer');
      }
      const contract = new web3.eth.Contract(chickly_abi, CONTRACT_ADDR);
      const value = web3.utils.toWei(priceBNB);
      const result = await contract.methods
         .buyNFT(plan_id, 1, referrer && referrer != 'null' ? referrer : '0x0000000000000000000000000000000000000000')
         .send({ from: accounts[0], value: value.toString() });
      window.location.href = '/cabinet.html';
   } catch (e) {
      console.log(e);
      alert(e.message);
   }
};
