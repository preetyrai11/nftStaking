// // import { useEffect } from "react";
// import { ethers } from "ethers";
// import { useState,useEffect } from 'react';
// import nftStakingABI from "./contract/nftStakingABI";
// // import ErrorMessage from "./ErrorMessage";
// // import TxList from "./TxList";



// export default function Profile() {
//     // const [stakeValue,setStakeValue]= useState([]);

//     const [walletAddress, setWalletAddress] = useState("");

//     const [stakeValue,setStakeValue]= useState(0);
// //   const [contractListened, setContractListened] = useState();

//     const [stakeFee,setStakeFee] = useState(0);
//     const [startblockNumber, setStartblockNumber] = useState(0);
//     const [totalStakeTokenBalance, setTotalStakeTokenBalance] = useState(0);
// //   NFTSTAKING_CONTRACT_ADDRESS=0x94962ceE884972a183B353cE2C83D3870AE3f4B1
//     const [rewardBalance, setRewardBalance] = useState(0);
//     const [totalStaked, setTotalStaked] = useState(0);
//     // const [stakeFee, setStakeFee] = useState(0);
//     const [feeDenominator, setFeeDenominator] = useState(0);
//     const [bonusEndBlock, setBonusEndBlock] = useState(0);
//     const [feeTaker, setFeeTaker] = useState(0);

// //   useEffect(() => {
//     async function main(){
//     //   const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const rpc = 'https://blissful-icy-voice.bsc-testnet.discover.quiknode.pro/3b66cff5f87ee76a268da69d7b267be4ff684fce/';
      
//       const PRIVATE_KEY = `774899b0ac5fa5cdf9323b74d587d0f95a6cae8711eee12ceb007b168a3192ea`;
//       const pro = new ethers.providers.JsonRpcProvider(rpc);
//       const wallet = new ethers.Wallet(PRIVATE_KEY, pro);
//       const contractAddress = "0x94962ceE884972a183B353cE2C83D3870AE3f4B1";
//       const nftstakingContract = new ethers.Contract(
//         contractAddress,
//         nftStakingABI,
//         wallet
//       );
      
//       console.log(nftstakingContract.address);
      
//       const feeTaker = await nftstakingContract.feeTaker();

//       console.log("FEE taker :- ",feeTaker);
//       const stakehex = await nftstakingContract.stakeFee();
//       const stakefee = parseInt(stakehex);
//       setStakeFee(stakefee);

//     //   console.log("stake fee :- ",stake._hex);
//     //   const BigNumber = stake.BigNumber;
//       const dec5 = parseInt(feeTaker);
//       setStakeValue(dec5);
//     //   setStakeFee(feeTaker);

      
       
//       const startblockhex = await nftstakingContract.startBlock();
//       const startblock = parseInt(startblockhex);
//       setStartblockNumber(startblock);
//       console.log("Start Block:- ", startblock);
//       const staketokenbalancehex = await nftstakingContract.totalStakeTokenBalance();
//       const staketokenbalance = parseInt(staketokenbalancehex);
//       setTotalStakeTokenBalance(staketokenbalance);
//       console.log("Stake Token Balance:- ", staketokenbalance);

//       const rewardbalancehex = await nftstakingContract.rewardBalance();
//       const rewardbalance = parseInt(rewardbalancehex);
//       setRewardBalance(rewardbalance);

//       const totalstakedhex = await nftstakingContract.totalStaked();
//       const totalstaked = parseInt(totalstakedhex);
//       setTotalStaked(totalstaked);

//       const feedenominatorhex = await nftstakingContract.feeDenominator();
//       const feedenominator = parseInt(feedenominatorhex);
//       setFeeDenominator(feedenominator);

//       const bonusendblockhex = await nftstakingContract.bonusEndBlock();
//       const bonusendblock = parseInt(bonusendblockhex);
//       setBonusEndBlock(bonusendblock);

//       const feetaker = await nftstakingContract.feeTaker();
//       setFeeTaker(feetaker);
      
//     //   const 
//     }
//     useEffect(()=>{
//         main() 
//     },[])
    


//     // console.log(stakeValue,"Stakevalue")
//     //   const owner = nftstakingContract.owner();
//     //   nftstakingContract.on("Transfer", (from, to, amount, event) => {
//     //     console.log({ from, to, amount, event });

//         // setTxs((currentTxs) => [
//         //   ...currentTxs,
//         //   {
//         //     txHash: event.transactionHash,
//         //     from,
//         //     to,
//         //     amount: String(amount)
//         //   }
//         // ]);
//     //   });
//     //   setContractListened(nftstakingContract);

//     //   return () => {
//     //     contractListened.removeAllListeners();
//     //   };
    
// //   }, [contractInfo.address]);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const data = new FormData(e.target);
// //     const provider = new ethers.providers.Web3Provider(window.ethereum);

// //     const erc20 = new ethers.Contract(data.get("addr"), erc20abi, provider);

// //     console.log(erc20);

// //     const tokenName = await erc20.name();
// //     const tokenSymbol = await erc20.symbol();
// //     const totalSupply = await erc20.totalSupply();

// //     setContractInfo({
// //       address: data.get("addr"),
// //       tokenName,
// //       tokenSymbol,
// //       totalSupply
// //     });
// //   };

// //   const getMyBalance = async () => {
// //     const provider = new ethers.providers.Web3Provider(window.ethereum);
// //     await provider.send("eth_requestAccounts", []);
// //     const erc20 = new ethers.Contract(contractInfo.address, erc20abi, provider);
// //     const signer = await provider.getSigner();
// //     const signerAddress = await signer.getAddress();
// //     const balance = await erc20.balanceOf(signerAddress);

// //     setBalanceInfo({
// //       address: signerAddress,
// //       balance: String(balance)
// //     });
// //   };

// //   const handleTransfer = async (e) => {
// //     e.preventDefault();
// //     const data = new FormData(e.target);
// //     const provider = new ethers.providers.Web3Provider(window.ethereum);
// //     await provider.send("eth_requestAccounts", []);
// //     const signer = await provider.getSigner();
// //     const erc20 = new ethers.Contract(contractInfo.address, erc20abi, signer);
// //     await erc20.transfer(data.get("recipient"), data.get("amount"));
// //   };

// //   const handleMinting = async (e) => {
// //     e.preventDefault();
// //     const data = new FormData(e.target);
// //     const provider = new ethers.providers.Web3Provider(window.ethereum);
// //     await provider.send("eth_requestAccounts", []);
// //     const signer = await provider.getSigner();
// //     const erc20 = new ethers.Contract(contractInfo.address, erc20abi, signer);
// //     await erc20.mint(data.get("wallet_address"), data.get("no_of_tokesn"));
// //   };
  
//   return (
    
//      <div>
        
        
//         <h1>this is nice</h1>
//         <h1> stake value : { stakeValue } </h1>
//         <p> stake Fee : { stakeFee } address </p>
//         <p> this is the { startblockNumber } start block number </p>
//         <p> this is nft staking contract { totalStakeTokenBalance } </p>
//         <p> the reward balance is { rewardBalance }</p>
//         <p> the total staked nft's are { totalStaked }</p>
//         <p> the fee denominator is { feeDenominator }</p>
//         <p> the bonus end block is { bonusEndBlock }</p>
//         <p> the fee taker address is { feeTaker } </p>
//     </div>  
//   );
// }





























































// // "@walletconnect/web3-provider": "^1.6.6",
// //     "ethers": "^5.5.1",
// //     "next": "latest",
// //     "react": "^17.0.2",
// //     "react-dom": "^17.0.2",
// //     "walletlink": "^2.2.6",
// //     "web3modal": "^1.9.4"























