import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { useEffect } from "react";
import { ScreenProvider } from "../src/contexts/ScreenContext";
import Aos from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      offset: 50,
    });
  }, []);

  return (
    <ScreenProvider>
      <Component {...pageProps} />
    </ScreenProvider>
  );
}

export default MyApp;
