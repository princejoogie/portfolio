import React, { useEffect } from "react";
import { AppProps } from "next/app";
import "../../styles/globals.css";
import "aos/dist/aos.css";
import "tailwindcss/tailwind.css";
import { Toaster } from "react-hot-toast";
import Aos from "aos";

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
      <Component {...pageProps} />
      <Toaster position="bottom-center" />
    </>
  );
};

export default MyApp;
