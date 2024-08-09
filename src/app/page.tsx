"use client";

import React from "react";
import { Web3Provider, ExternalProvider } from "@ethersproject/providers";
import Main from "@phantom/components/main";

export default function Home() {
  return (
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  );
}
