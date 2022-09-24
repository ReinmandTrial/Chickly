import Web3 from "web3"
const CHAIN_ID = "0x61"
const BSCSCAN = "https://testnet.bscscan.com"
const CONTRACT_ADDR="0x514e1aaD22fc73a58BEE17Fb53B203C4fCBaE8b7"
import abi from "../chickly.json"

let accounts=[]
let is_connected = 0


const update_balance=async()=>{
//    document._referrer=(ref=window.location.href.match(/ref=(0x[A-Fa-f0-9]+)/)) && ref[1]
        const web3= new Web3(window.ethereum)
        const user_balance = await web3.eth.getBalance(accounts[0])
        document.getElementById('headerBtn').textContent=accounts[0].substr(0,6) + "..." + accounts[0].substr(-4) + " "
           + Number(web3.utils.fromWei(user_balance)).toFixed(3) + " BNB"
}

export const connect=async(e)=>{
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


export const buyNFT=async(e)=>{
    if (!is_connected) return
    const plan_id=e.target.attributes.plan_id.value
    const priceBNB=e.target.attributes.price.value
    let ref=""
    const referrer=(ref=window.location.href.match(/ref=(0x[A-Fa-f0-9]+)/)) && ref[1]
    const web3= new Web3(window.ethereum)
    const contract=new web3.eth.Contract(abi, CONTRACT_ADDR )
    const value=web3.utils.toWei(priceBNB)
    const result= await contract.methods.buyNFT(plan_id,1,referrer?referrer:"0x0000000000000000000000000000000000000000").send({from:accounts[0], value:value.toString()})

}

export const update_counters=async()=>{
    const web3= new Web3(window.ethereum || 'https://data-seed-prebsc-1-s1.binance.org:8545')
    const contract=new web3.eth.Contract(abi, CONTRACT_ADDR )


}


