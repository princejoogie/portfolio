import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { cn, constants, getBaseUrl } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";

const inter = Inter({ subsets: ["latin"] });

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
    <html className="dark" lang="en">
      <body className={inter.className}>
        <DotPattern
          width={20}
          height={20}
          className={cn(
            "fixed inset-0 [mask-image:radial-gradient(50vw_circle_at_center,red,transparent)]"
          )}
        />
        <div className="container mx-auto mb-10 min-h-screen w-full max-w-5xl px-4">
          <NavBar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
