import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextNProgress color="#2563eb" height={1} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
