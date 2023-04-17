import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { defaultSeo } from "@/utils/constants";

export const metadata: Metadata = {
  ...defaultSeo,
  openGraph: {
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
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
