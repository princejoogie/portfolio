import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ScreenProvider } from "../src/contexts/ScreenContext";

function MyApp({ Component, pageProps }) {
  return (
    <ScreenProvider>
      <Component {...pageProps} />;
    </ScreenProvider>
  );
}

export default MyApp;
