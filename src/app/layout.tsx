import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import { cn, constants, getBaseUrl } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";

const instrumentSans = Instrument_Sans({ subsets: ["latin"] });

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
      <body className={instrumentSans.className}>
        <DotPattern
          width={20}
          height={20}
          className={cn(
            "fixed inset-0 [mask-image:radial-gradient(50vw_circle_at_center,red,transparent)]"
          )}
        />
        <div className="container mx-auto flex min-h-screen w-full max-w-3xl flex-col px-4">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
