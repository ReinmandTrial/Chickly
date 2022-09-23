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
    const plan_id=e.target.attributes.plan_id
    const price=e.target.attributes.price
    let ref=""
    const referrer=(ref=window.location.href.match(/ref=(0x[A-Fa-f0-9]+)/)) && ref[1]
    const web3= new web3__WEBPACK_IMPORTED_MODULE_0__(window.ethereum)
    const contract=new web3.eth.Contract(_chickly_json__WEBPACK_IMPORTED_MODULE_1__, CONTRACT_ADDR )
    const value=web3.utils.toWei(priceBNB)
console.log(contract)
//    const result=await contract.methods.buyNFT(plan_id,1,referrer).send({from:accounts[0], value.toString()})

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
/******/ 	__webpack_require__.h = () => ("4498ba54a408fdf4605d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hOTFhODFhZWZmNzFiMTA1MmMwYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLENBQWlDOztBQUVqQztBQUNBOzs7QUFHQTtBQUNBO0FBQ0Esd0JBQXdCLGlDQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSw2Q0FBNkMsK0JBQStCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUMsV0FBVztBQUNYOztBQUVBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQ0FBSTtBQUN4Qix5Q0FBeUMsMENBQUc7QUFDNUM7QUFDQTtBQUNBLDJFQUEyRSxtQ0FBbUM7O0FBRTlHOztBQUVPO0FBQ1Asb0JBQW9CLGlDQUFJO0FBQ3hCLHlDQUF5QywwQ0FBRzs7O0FBRzVDOzs7Ozs7Ozs7OztVQzlFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9qcy9maWxlcy9jb250cmFjdC5qcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCJcbmNvbnN0IENIQUlOX0lEID0gXCIweDYxXCJcbmNvbnN0IEJTQ1NDQU4gPSBcImh0dHBzOi8vdGVzdG5ldC5ic2NzY2FuLmNvbVwiXG5jb25zdCBDT05UUkFDVF9BRERSPVwiMHhFRjFGRjg5QjI0NjA4OTUwYThiNDcxRTUwNkRiODU5QzEwMTNjZjk0XCJcbmltcG9ydCBhYmkgZnJvbSBcIi4uL2NoaWNrbHkuanNvblwiXG5cbmxldCBhY2NvdW50cz1bXVxubGV0IGlzX2Nvbm5lY3RlZCA9IDBcblxuXG5jb25zdCB1cGRhdGVfYmFsYW5jZT1hc3luYygpPT57XG4vLyAgICBkb2N1bWVudC5fcmVmZXJyZXI9KHJlZj13aW5kb3cubG9jYXRpb24uaHJlZi5tYXRjaCgvcmVmPSgweFtBLUZhLWYwLTldKykvKSkgJiYgcmVmWzFdXG4gICAgICAgIGNvbnN0IHdlYjM9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSlcbiAgICAgICAgY29uc3QgdXNlcl9iYWxhbmNlID0gYXdhaXQgd2ViMy5ldGguZ2V0QmFsYW5jZShhY2NvdW50c1swXSlcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlckJ0bicpLnRleHRDb250ZW50PWFjY291bnRzWzBdLnN1YnN0cigwLDYpICsgXCIuLi5cIiArIGFjY291bnRzWzBdLnN1YnN0cigtNCkgKyBcIiBcIlxuICAgICAgICAgICArIE51bWJlcih3ZWIzLnV0aWxzLmZyb21XZWkodXNlcl9iYWxhbmNlKSkudG9GaXhlZCgzKSArIFwiIEJOQlwiXG59XG5cbmV4cG9ydCBjb25zdCBjb25uZWN0PWFzeW5jKGUpPT57XG4gIGlmICh0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSAndW5kZWZpbmVkJykge1xuICAgIGFjY291bnRzPWF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSlcbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoID4gMCl7XG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bS5jaGFpbklkID09IENIQUlOX0lEKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWxyZWFkeSBjb25uZWN0ZWQgdG8gZXRoZXJldW0gbWFpbm5ldC4uLlwiKVxuICAgICAgICBpc19jb25uZWN0ZWQgPSAxXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnd2FsbGV0X3N3aXRjaEV0aGVyZXVtQ2hhaW4nLFxuICAgICAgICAgICAgICBwYXJhbXM6IFt7Y2hhaW5JZDogQ0hBSU5fSUR9XSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIGlzX2Nvbm5lY3RlZCA9IDFcblxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgYXdhaXQgdXBkYXRlX2JhbGFuY2UoKVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV0aFRvUGF5XCIpLmlubmVySFRNTCA9IFwiMFwiXG4gICAgICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmNvbnN0IGNvcHl0ZXh0PWFzeW5jKCk9PntcbnZhciBjb3B5VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVmX2xpbmtcIik7XG5jb3B5VGV4dC5zZWxlY3QoKTtcbmNvcHlUZXh0LnNldFNlbGVjdGlvblJhbmdlKDAsIDk5OTk5KTtcbmlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkKXtcbiAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb3B5VGV4dC52YWx1ZSlcbn1lbHNle1xuICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIilcbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGJ1eU5GVD1hc3luYyhlKT0+e1xuICAgIGlmICghaXNfY29ubmVjdGVkKSByZXR1cm5cbiAgICBjb25zdCBwbGFuX2lkPWUudGFyZ2V0LmF0dHJpYnV0ZXMucGxhbl9pZFxuICAgIGNvbnN0IHByaWNlPWUudGFyZ2V0LmF0dHJpYnV0ZXMucHJpY2VcbiAgICBsZXQgcmVmPVwiXCJcbiAgICBjb25zdCByZWZlcnJlcj0ocmVmPXdpbmRvdy5sb2NhdGlvbi5ocmVmLm1hdGNoKC9yZWY9KDB4W0EtRmEtZjAtOV0rKS8pKSAmJiByZWZbMV1cbiAgICBjb25zdCB3ZWIzPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pXG4gICAgY29uc3QgY29udHJhY3Q9bmV3IHdlYjMuZXRoLkNvbnRyYWN0KGFiaSwgQ09OVFJBQ1RfQUREUiApXG4gICAgY29uc3QgdmFsdWU9d2ViMy51dGlscy50b1dlaShwcmljZUJOQilcbmNvbnNvbGUubG9nKGNvbnRyYWN0KVxuLy8gICAgY29uc3QgcmVzdWx0PWF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuYnV5TkZUKHBsYW5faWQsMSxyZWZlcnJlcikuc2VuZCh7ZnJvbTphY2NvdW50c1swXSwgdmFsdWUudG9TdHJpbmcoKX0pXG5cbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZV9jb3VudGVycz1hc3luYygpPT57XG4gICAgY29uc3Qgd2ViMz0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtIHx8ICdodHRwczovL2RhdGEtc2VlZC1wcmVic2MtMS1zMS5iaW5hbmNlLm9yZzo4NTQ1JylcbiAgICBjb25zdCBjb250cmFjdD1uZXcgd2ViMy5ldGguQ29udHJhY3QoYWJpLCBDT05UUkFDVF9BRERSIClcblxuXG59XG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDQ5OGJhNTRhNDA4ZmRmNDYwNWRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=