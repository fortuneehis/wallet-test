import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { cookieStorage, createStorage } from "wagmi";
import { goerli, mainnet, sepolia } from "wagmi/chains";

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

export const metadata = {
  name: "WalletTest",
  description: "Wallet Test",
  url: "https://https://wallet-test-rho.vercel.app/",
  icons: [],
};

// Create wagmiConfig
const chains = [goerli, mainnet] as const;
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
