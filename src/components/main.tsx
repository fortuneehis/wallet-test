import { useWeb3React } from "@web3-react/core";
import { useRef, useState } from "react";
import { PhantomConnector } from "web3-react-v6-phantom";

const phantom = new PhantomConnector({
  supportedChainIds: [1, 5], // Mainnet and Goerli ChainIds
});

const Main = () => {
  const { activate, deactivate, account, connector, active } = useWeb3React();
  const [connected, setConnected] = useState(false);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const connect = async () => {
    try {
      await activate(phantom);
      setConnected(true);
    } catch (e) {
      console.error(e);
    }
  };
  const disconnect = () => {
    try {
      deactivate();
      setConnected(false);
    } catch (e) {
      console.error(e);
    }
  };

  if (active)
    return (
      <main className="flex items-center flex-col justify-center px-4 min-h-screen">
        <div className="bg-gray-300 mb-4 w-full sm:w-auto items-center justify-between flex p-4 rounded-2xl">
          <p ref={textRef} className="mr-1 text-sm sm:text-base truncate">
            {account}
          </p>
          <svg
            onClick={() => {
              if (!textRef.current) return;

              navigator.clipboard.writeText(
                textRef.current.textContent as string
              );
            }}
            className="cursor-pointer stroke-gray-900 hover:stroke-[#39B588]"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <button
          className="bg-gray-900 text-white px-8 py-4 rounded-full"
          onClick={disconnect}
        >
          Disconnect
        </button>
      </main>
    );

  return (
    <main className="flex items-center justify-center min-h-screen">
      <button
        className="bg-[#39B588] text-white px-8 py-4 rounded-full"
        onClick={connect}
        disabled={!connector}
      >
        Connect
      </button>
    </main>
  );
};

export default Main;
