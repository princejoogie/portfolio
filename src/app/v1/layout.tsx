import "../globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { constants, getBaseUrl } from "@/lib/utils";

export const metadata: Metadata = {
  ...constants.defaultSeo,
  openGraph: {
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  metadataBase: new URL(getBaseUrl()),
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <div className="container mx-auto mb-10 min-h-screen w-full max-w-5xl px-4">
        <NavBar />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
