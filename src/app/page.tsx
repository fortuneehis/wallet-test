"use client";

import React from "react";
import { Web3Provider, ExternalProvider } from "@ethersproject/providers";
import Main from "@phantom/components/main";
import { Wallet } from "@phantom/components/second";

export default function Home() {
  return (
    <React.StrictMode>
      <Wallet />
    </React.StrictMode>
  );
}
