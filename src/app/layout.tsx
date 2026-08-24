import "./globals.css";
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { GoogleAnalytics } from "@/components/gtag";
import { Header } from "@/components/home/header";
import DotPattern from "@/components/magicui/dot-pattern";
import { SiteNavigation } from "@/components/site-navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { cn, constants, getBaseUrl } from "@/lib/utils";

const instrumentSans = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...constants.defaultSeo,
  alternates: {
    canonical: "/",
    types: {
      "text/markdown": "/index.md",
    },
  },
  openGraph: {
    type: "website",
    title: constants.defaultSeo.title,
    description: constants.defaultSeo.description,
    siteName: "Prince Juguilon Portfolio",
    url: "/",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: constants.defaultSeo.title,
    description: constants.defaultSeo.description,
    images: ["/api/og"],
  },
  metadataBase: new URL(getBaseUrl()),
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
      </head>

      <body className={instrumentSans.className}>
        <DotPattern
          width={20}
          height={20}
          className={cn(
            "fixed inset-0 z-[-1] [mask-image:radial-gradient(50vw_circle_at_center,red,transparent)] opacity-30",
          )}
        />
        <ThemeProvider>
          <div className="container mx-auto flex min-h-screen w-full max-w-3xl flex-col px-4">
            <main className="flex-1 pt-8">
              <Header />
              <hr className="my-8" />
              <SiteNavigation />
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
