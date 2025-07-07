import "./globals.css";
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { GoogleAnalytics } from "@/components/gtag";
import { Header } from "@/components/home/header";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn, constants, getBaseUrl } from "@/lib/utils";

const instrumentSans = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...constants.defaultSeo,
  openGraph: {
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  metadataBase: new URL(getBaseUrl()),
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html className="dark" lang="en">
      <head>
        <GoogleAnalytics />
      </head>

      <body className={instrumentSans.className}>
        <DotPattern
          width={20}
          height={20}
          className={cn(
            "fixed inset-0 z-[-1] [mask-image:radial-gradient(50vw_circle_at_center,red,transparent)]",
          )}
        />
        <div className="container mx-auto flex min-h-screen w-full max-w-3xl flex-col px-4">
          <main className="flex-1 pt-8">
            <Header />
            <hr className="my-8" />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
