import "../../styles/globals.css";
import "aos/dist/aos.css";
import "tailwindcss/tailwind.css";
import Aos from "aos";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      offset: 0,
      once: true,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
