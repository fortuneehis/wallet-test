"use client";
import { Web3ReactProvider } from "@web3-react/core";
import React from "react";
import { Web3Provider, ExternalProvider } from "@ethersproject/providers";
import Main from "@phantom/components/main";

export default function Home() {
  function getLibrary(provider: unknown) {
    const library = new Web3Provider(provider as ExternalProvider);
    library.pollingInterval = 12000;
    return library;
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <React.StrictMode>
        <Main />
      </React.StrictMode>
    </Web3ReactProvider>
  );
}
