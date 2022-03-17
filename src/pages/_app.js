import React, { useEffect } from "react";
import "../../styles/globals.css";
import "aos/dist/aos.css";
import "tailwindcss/tailwind.css";
import Aos from "aos";

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
