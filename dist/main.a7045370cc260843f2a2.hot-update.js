"use strict";
self["webpackHotUpdatefls_start"]("main",{

/***/ "./src/js/files/contract.js":
/*!**********************************!*\
  !*** ./src/js/files/contract.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buyNFT": () => (/* binding */ buyNFT),
/* harmony export */   "connect": () => (/* binding */ connect),
/* harmony export */   "update_counters": () => (/* binding */ update_counters)
/* harmony export */ });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.min.js");
/* harmony import */ var _chickly_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chickly.json */ "./src/js/chickly.json");

const CHAIN_ID = "0x61"
const BSCSCAN = "https://testnet.bscscan.com"
const CONTRACT_ADDR="0xEF1FF89B24608950a8b471E506Db859C1013cf94"
;

let accounts=[]
let is_connected = 0


const update_balance=async()=>{
//    document._referrer=(ref=window.location.href.match(/ref=(0x[A-Fa-f0-9]+)/)) && ref[1]
        const web3= new web3__WEBPACK_IMPORTED_MODULE_0__(window.ethereum)
        const user_balance = await web3.eth.getBalance(accounts[0])
        document.getElementById('headerBtn').textContent=accounts[0].substr(0,6) + "..." + accounts[0].substr(-4) + " "
           + Number(web3.utils.fromWei(user_balance)).toFixed(3) + " BNB"
}

const connect=async(e)=>{
  if (typeof window.ethereum !== 'undefined') {
    accounts=await window.ethereum.request({ method: 'eth_requestAccounts' })
    if (accounts.length > 0){
    if (window.ethereum.chainId == CHAIN_ID) {
        console.log("Already connected to ethereum mainnet...")
        is_connected = 1
    }
    else {
      try {
          await ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{chainId: CHAIN_ID}],
          })
          is_connected = 1

      } catch (e) {
            console.log(e)
          }
      }
    await update_balance()
    }
    else{
        document.getElementById("ethToPay").innerHTML = "0"
        }
  }
  return false;
}

const copytext=async()=>{
var copyText = document.getElementById("ref_link");
copyText.select();
copyText.setSelectionRange(0, 99999);
if (navigator.clipboard){
    await navigator.clipboard.writeText(copyText.value)
}else{
     document.execCommand("copy")
    }
}


const buyNFT=async(e)=>{
    if (!is_connected) return
    const plan_id=e.target.attributes.plan_id.value
    const priceBNB=e.target.attributes.price.value
    let ref=""
    const referrer=(ref=window.location.href.match(/ref=(0x[A-Fa-f0-9]+)/)) && ref[1]
    const web3= new web3__WEBPACK_IMPORTED_MODULE_0__(window.ethereum)
    const contract=new web3.eth.Contract(_chickly_json__WEBPACK_IMPORTED_MODULE_1__, CONTRACT_ADDR )
    const value=web3.utils.toWei(priceBNB)
    console.log( await contract.methods.buyNFT(plan_id,1,referrer?referrer:"0x0000000000000000000000000000000000000000").send({from:accounts[0], value:value.toString()}))

}

const update_counters=async()=>{
    const web3= new web3__WEBPACK_IMPORTED_MODULE_0__(window.ethereum || 'https://data-seed-prebsc-1-s1.binance.org:8545')
    const contract=new web3.eth.Contract(_chickly_json__WEBPACK_IMPORTED_MODULE_1__, CONTRACT_ADDR )


}




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5fe2573fa17c723b92ba")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hNzA0NTM3MGNjMjYwODQzZjJhMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLENBQWlDOztBQUVqQztBQUNBOzs7QUFHQTtBQUNBO0FBQ0Esd0JBQXdCLGlDQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSw2Q0FBNkMsK0JBQStCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUMsV0FBVztBQUNYOztBQUVBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQ0FBSTtBQUN4Qix5Q0FBeUMsMENBQUc7QUFDNUM7QUFDQSwrSEFBK0gseUNBQXlDOztBQUV4Szs7QUFFTztBQUNQLG9CQUFvQixpQ0FBSTtBQUN4Qix5Q0FBeUMsMENBQUc7OztBQUc1Qzs7Ozs7Ozs7Ozs7VUM3RUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9zcmMvanMvZmlsZXMvY29udHJhY3QuanMiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiXG5jb25zdCBDSEFJTl9JRCA9IFwiMHg2MVwiXG5jb25zdCBCU0NTQ0FOID0gXCJodHRwczovL3Rlc3RuZXQuYnNjc2Nhbi5jb21cIlxuY29uc3QgQ09OVFJBQ1RfQUREUj1cIjB4RUYxRkY4OUIyNDYwODk1MGE4YjQ3MUU1MDZEYjg1OUMxMDEzY2Y5NFwiXG5pbXBvcnQgYWJpIGZyb20gXCIuLi9jaGlja2x5Lmpzb25cIlxuXG5sZXQgYWNjb3VudHM9W11cbmxldCBpc19jb25uZWN0ZWQgPSAwXG5cblxuY29uc3QgdXBkYXRlX2JhbGFuY2U9YXN5bmMoKT0+e1xuLy8gICAgZG9jdW1lbnQuX3JlZmVycmVyPShyZWY9d2luZG93LmxvY2F0aW9uLmhyZWYubWF0Y2goL3JlZj0oMHhbQS1GYS1mMC05XSspLykpICYmIHJlZlsxXVxuICAgICAgICBjb25zdCB3ZWIzPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pXG4gICAgICAgIGNvbnN0IHVzZXJfYmFsYW5jZSA9IGF3YWl0IHdlYjMuZXRoLmdldEJhbGFuY2UoYWNjb3VudHNbMF0pXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJCdG4nKS50ZXh0Q29udGVudD1hY2NvdW50c1swXS5zdWJzdHIoMCw2KSArIFwiLi4uXCIgKyBhY2NvdW50c1swXS5zdWJzdHIoLTQpICsgXCIgXCJcbiAgICAgICAgICAgKyBOdW1iZXIod2ViMy51dGlscy5mcm9tV2VpKHVzZXJfYmFsYW5jZSkpLnRvRml4ZWQoMykgKyBcIiBCTkJcIlxufVxuXG5leHBvcnQgY29uc3QgY29ubmVjdD1hc3luYyhlKT0+e1xuICBpZiAodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBhY2NvdW50cz1hd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pXG4gICAgaWYgKGFjY291bnRzLmxlbmd0aCA+IDApe1xuICAgIGlmICh3aW5kb3cuZXRoZXJldW0uY2hhaW5JZCA9PSBDSEFJTl9JRCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFscmVhZHkgY29ubmVjdGVkIHRvIGV0aGVyZXVtIG1haW5uZXQuLi5cIilcbiAgICAgICAgaXNfY29ubmVjdGVkID0gMVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ3dhbGxldF9zd2l0Y2hFdGhlcmV1bUNoYWluJyxcbiAgICAgICAgICAgICAgcGFyYW1zOiBbe2NoYWluSWQ6IENIQUlOX0lEfV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgICBpc19jb25uZWN0ZWQgPSAxXG5cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIGF3YWl0IHVwZGF0ZV9iYWxhbmNlKClcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJldGhUb1BheVwiKS5pbm5lckhUTUwgPSBcIjBcIlxuICAgICAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5jb25zdCBjb3B5dGV4dD1hc3luYygpPT57XG52YXIgY29weVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZl9saW5rXCIpO1xuY29weVRleHQuc2VsZWN0KCk7XG5jb3B5VGV4dC5zZXRTZWxlY3Rpb25SYW5nZSgwLCA5OTk5OSk7XG5pZiAobmF2aWdhdG9yLmNsaXBib2FyZCl7XG4gICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29weVRleHQudmFsdWUpXG59ZWxzZXtcbiAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBidXlORlQ9YXN5bmMoZSk9PntcbiAgICBpZiAoIWlzX2Nvbm5lY3RlZCkgcmV0dXJuXG4gICAgY29uc3QgcGxhbl9pZD1lLnRhcmdldC5hdHRyaWJ1dGVzLnBsYW5faWQudmFsdWVcbiAgICBjb25zdCBwcmljZUJOQj1lLnRhcmdldC5hdHRyaWJ1dGVzLnByaWNlLnZhbHVlXG4gICAgbGV0IHJlZj1cIlwiXG4gICAgY29uc3QgcmVmZXJyZXI9KHJlZj13aW5kb3cubG9jYXRpb24uaHJlZi5tYXRjaCgvcmVmPSgweFtBLUZhLWYwLTldKykvKSkgJiYgcmVmWzFdXG4gICAgY29uc3Qgd2ViMz0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKVxuICAgIGNvbnN0IGNvbnRyYWN0PW5ldyB3ZWIzLmV0aC5Db250cmFjdChhYmksIENPTlRSQUNUX0FERFIgKVxuICAgIGNvbnN0IHZhbHVlPXdlYjMudXRpbHMudG9XZWkocHJpY2VCTkIpXG4gICAgY29uc29sZS5sb2coIGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuYnV5TkZUKHBsYW5faWQsMSxyZWZlcnJlcj9yZWZlcnJlcjpcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwiKS5zZW5kKHtmcm9tOmFjY291bnRzWzBdLCB2YWx1ZTp2YWx1ZS50b1N0cmluZygpfSkpXG5cbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZV9jb3VudGVycz1hc3luYygpPT57XG4gICAgY29uc3Qgd2ViMz0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtIHx8ICdodHRwczovL2RhdGEtc2VlZC1wcmVic2MtMS1zMS5iaW5hbmNlLm9yZzo4NTQ1JylcbiAgICBjb25zdCBjb250cmFjdD1uZXcgd2ViMy5ldGguQ29udHJhY3QoYWJpLCBDT05UUkFDVF9BRERSIClcblxuXG59XG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWZlMjU3M2ZhMTdjNzIzYjkyYmFcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=