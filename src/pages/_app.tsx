import "../styles/globals.css";
import React from "react";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextNProgress color="#2563eb" height={1} />
      <Component {...pageProps} />
      <Toaster position="bottom-center" />
    </>
  );
};

export default MyApp;
