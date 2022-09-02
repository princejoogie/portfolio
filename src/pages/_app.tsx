import React, { useEffect } from "react";
import "../styles/globals.css";
import "aos/dist/aos.css";
import "tailwindcss/tailwind.css";
import Aos from "aos";
import NextNProgress from "nextjs-progressbar";
import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      offset: 0,
      once: true,
    });
  }, []);

  return (
    <>
      <NextNProgress color="#2563eb" height={1} />
      <Component {...pageProps} />
      <Toaster position="bottom-center" />
    </>
  );
};

export default MyApp;
