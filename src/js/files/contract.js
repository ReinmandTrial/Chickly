import Web3 from "web3"
const CHAIN_ID = "0x61"
const BSCSCAN = "https://testnet.bscscan.com"
const CONTRACT_ADDR="0x53CC070Fa0E87c20F7e5485a4042ce78d5B43baC"
import abi from "../chickly.json"
export const nft_plans = [
        {
            'currency': 'bnb',
            'price': 0.04,
            'profit': 170,
            'nft': 'nft-1.svg',
            'plan': 0
        },
        {
            'currency': 'bnb',
            'price': 0.4,
            'profit': 180,
            'nft': 'nft-2.svg',
            'plan': 1
        },
        {
            'currency': 'bnb',
            'price': 2,
            'profit': 190,
            'nft': 'nft-3.svg',
            'plan': 2
        },
        {
            'currency': 'bnb',
            'price': 12,
            'profit': 200,
            'nft': 'nft-4.svg',
            'plan': 3
        },
        {
            'price': 40,
            'currency': 'bnb',
            'profit': 220,
            'nft': 'nft-5.svg',
            'plan': 4
        },
        {
            'currency': 'busd',
            'price': 10,
            'profit': 170,
            'nft': 'nft-1.svg',
            'plan': 5
        },
        {
            'currency': 'busd',
            'price': 100,
            'profit': 180,
            'nft': 'nft-2.svg',
            'plan': 6
        },
        {
            'currency': 'busd',
            'price': 500,
            'profit': 190,
            'nft': 'nft-3.svg',
            'plan': 7
        },
        {
            'currency': 'busd',
            'price': 3000,
            'profit': 200,
            'nft': 'nft-4.svg',
            'plan': 8
        },
        {
            'currency': 'busd',
            'price': 10000,
            'profit': 220,
            'nft': 'nft-5.svg',
            'plan': 9
        },
    ]


let accounts=[]
let is_connected = 0


const update_balance=async()=>{
    const web3= new Web3(window.ethereum)
    const user_balance = await web3.eth.getBalance(accounts[0])
    document.getElementById('headerBtn').textContent=accounts[0].substr(0,6) + "..." + accounts[0].substr(-4) + " "
           + Number(web3.utils.fromWei(user_balance)).toFixed(3) + " BNB"
    document.querySelector("#cabinet_button").style.display=''

}

let last_block=0;

const load_events=async(toBlock)=>{
    const web3= new Web3('https://data-seed-prebsc-1-s1.binance.org:8545')
    const contract=new web3.eth.Contract(abi, CONTRACT_ADDR )
    const events = await contract.getPastEvents('allEvents',{fromBlock: toBlock - 4000, toBlock: toBlock})
    events.forEach(event => {
      const e=document.createElement('LI')
      e.classList.add('replenishment__item')
      e.classList.add('active')
      e.classList.add('see')
      const uri=BSCSCAN + "/tx/" + event.transactionHash

      if (event.event =='Withdrawn'){
        const amount= Number(web3.utils.fromWei(event.returnValues.bnb > 0?event.returnValues.bnb:event.returnValues.busd)).toFixed(5)
        const currency=event.returnValues.bnb > 0?'BNB':'BUSD'
        e.innerHTML=`<p class="replenishment__price">Withdraw ${amount} ${currency}</p>
                      <div class="replenishment__bottom-row">
                        <p class="replenishment__code">${event.returnValues.user}</p>
                        <a href="${uri}" class="replenishment__link _icon-eye"></a>
                      </div>`
        document.querySelector("ul.replenishment__list").append(e)
      }else 
      if (event.event =='NewDeposit'){
        const plan=nft_plans[event.returnValues.plan]
        e.innerHTML=`<p class="replenishment__price">Buy ${plan.price * event.returnValues.amount} ${plan["currency"].toUpperCase()}</p>
                      <div class="replenishment__bottom-row">
                        <p class="replenishment__code">${event.returnValues.user}</p>
                        <a href="${uri}" class="replenishment__link _icon-eye" target="_blank"></a>
                      </div>`
        document.querySelector("ul.replenishment__list").append(e)
      }

  })
  return events
}
let is_loading_events=0
export const next_events=async()=>{
  if (is_loading_events) return
  is_loading_events=1
    let indx=0
    let events=[]
    while(events.length<6 && indx < 20){
      events=await load_events(last_block)
      last_block-=4000
      indx++
    }
  is_loading_events=0
}
export const update_events=async()=>{
  if (is_loading_events) return
  is_loading_events=1

    const web3= new Web3('https://data-seed-prebsc-1-s1.binance.org:8545')
    const contract=new web3.eth.Contract(abi, CONTRACT_ADDR )
    last_block=await web3.eth.getBlockNumber()
    let events=[]
    let indx=0
    while(events.length<6 && indx < 20){
      events=await load_events(last_block)
      last_block-=4000
      indx++
    }
  is_loading_events=0
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
//
    }
  }
  return false;
}


export const buyNFT=async(e)=>{
    if (!is_connected) return
  try{
    const plan_id=e.target.attributes.plan_id.value
    const priceBNB=e.target.attributes.price.value
    let ref=""
    const referrer=(ref=window.location.href.match(/ref=(0x[A-Fa-f0-9]+)/)) && ref[1]
    const web3= new Web3(window.ethereum)
    const contract=new web3.eth.Contract(abi, CONTRACT_ADDR )
    const value=web3.utils.toWei(priceBNB)
    const result= await contract.methods.buyNFT(plan_id,1,referrer?referrer:"0x0000000000000000000000000000000000000000").send({from:accounts[0], value:value.toString()})

  }catch(e){
    console.log(e)
    alert(e.message)
  }

}

