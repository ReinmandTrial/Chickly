import { is_connected, connect, disconnect, buyNFT, update_events, next_events, update_counters } from './utility/utility.js';

function setCookie(cname, cvalue, exdays) {
   const d = new Date();
   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
   let expires = 'expires=' + d.toUTCString();
   document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

window.addEventListener('load', async () => {
   let ref = '';
   const nft_referrer = (ref = window.location.href.match(/ref=(0x[A-Fa-f0-9]+)/)) && ref[1];
   if (nft_referrer && nft_referrer != 'null') {
      localStorage.setItem('referrer', nft_referrer);
      setCookie('referrer', nft_referrer);
   }
   if (document.getElementById('aboutBtnConnect')) {
      document.getElementById('disconnectBtn').onclick = disconnect;
      document.getElementById('aboutBtnConnect').onclick = connect;
      document.getElementById('howWorkItemBtn1').onclick = async (e) => {
         if (is_connected) return true;
         e.preventDefault();
         await connect();
         return false;
      };
      document.getElementById('referralBtn').onclick = async (e) => {
         if (is_connected) return true;
         e.preventDefault();
         await connect();
         return false;
      };
      document.getElementById('headerBtn').onclick = connect;

      document.getElementById('replenishmentSeeMore').onclick = async () => {
         await next_events();
      };
      document.getElementById('nftBuy1').onclick = buyNFT;
      document.getElementById('nftBuy2').onclick = buyNFT;
      document.getElementById('nftBuy3').onclick = buyNFT;
      document.getElementById('nftBuy4').onclick = buyNFT;
      document.getElementById('nftBuy5').onclick = buyNFT;
      update_events();
   } else {
      document.getElementById('headerBtn').onclick = connect;
      document.getElementById('disconnectBtn').onclick = disconnect;
   }
   if (nft_referrer) connect();
   update_counters();
});

import '../base/libs/wNumb.min.js';
import './pages/home.js';
import './pages/partners.js';
import './pages/trade-in.js';
