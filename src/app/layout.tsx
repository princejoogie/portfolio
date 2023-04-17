import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Prince Juguilon | Software Engineer",
  description:
    "A Software Engineer based in the Philippines, React enthusiast, fond of creating interactive and responsive layouts for web and mobile applications.",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <body>
        <div className="mx-auto mb-10 min-h-screen w-full max-w-screen-xl px-4">
          <NavBar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
