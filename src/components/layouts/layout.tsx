import { NextSeo, NextSeoProps } from "next-seo";
import React, { ReactNode } from "react";
import Footer from "../footer";
import NavBar from "../navbar";

interface LayoutProps {
  seo?: NextSeoProps;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, seo }) => {
  return (
    <>
      <NextSeo {...seo} />

      <div className="mx-auto mb-10 min-h-screen w-full max-w-screen-xl px-4">
        <NavBar />
        {children}
      </div>

      <Footer />
    </>
  );
};

export default Layout;
