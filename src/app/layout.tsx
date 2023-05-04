import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { constants } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...constants.defaultSeo,
  openGraph: {
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html className="dark">
      <body className={inter.className}>
        <div className="mx-auto mb-10 min-h-screen w-full container px-4">
          <NavBar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
