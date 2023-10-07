import { Chain } from "@rainbow-me/rainbowkit";

export const customEthMainnet: Chain = {
  id: 1,
  name: "Ethereum",
  network: "homestead",
  iconUrl: "https://etherscan.io/images/svg/brands/ethereum-original.svg",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    public: { http: [process.env.NEXT_PUBLIC_ETH_MAINNET_RPC_PROVIDER || ""] },
    default: { http: [process.env.NEXT_PUBLIC_ETH_MAINNET_RPC_PROVIDER || ""] }
  },
  blockExplorers: {
    default: { name: "Etherscan", url: "https://etherscan.io" },
    etherscan: { name: "Etherscan", url: "https://etherscan.io" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601
    }
  },
  testnet: false
};

export const customBscTestnet: Chain = {
  id: 97,
  name: "BSC Testnet",
  network: "bsc-testnet",
  iconUrl: "https://bscscan.com/assets/bsc/images/svg/logos/bnb-chain.svg",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "BNB",
    symbol: "tBNB"
  },
  rpcUrls: {
    public: { http: [process.env.NEXT_PUBLIC_BSC_TESTNET_RPC_PROVIDER || ""] },
    default: { http: [process.env.NEXT_PUBLIC_BSC_TESTNET_RPC_PROVIDER || ""] }
  },
  blockExplorers: {
    default: { name: "BscScan", url: "https://testnet.bscscan.com" },
    etherscan: { name: "BscScan", url: "https://testnet.bscscan.com" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 17422483
    }
  },
  testnet: true
};
