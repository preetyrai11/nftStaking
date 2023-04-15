// import logo from './logo.svg';
// import './App.css';

// import Profile from './Profile';
// // import WalletConnect from './WalletConnect.css';

// function App() {
//   return (
//     <>
   
//     <Profile />
//     </>
//   );
// }

// export default App;



import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'
import Profile from './Profile';
// import Wagmi from './Wagmi';
import WalletConnect from './WalletConnect';
const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
})

function App() {
  return (
    <WagmiConfig client={client}>
      <WalletConnect />
      <Profile />
    </WagmiConfig>
  )
}

export default App;








