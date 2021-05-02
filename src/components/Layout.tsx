import { NextSeo, NextSeoProps } from "next-seo";
import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

interface LayoutProps {
  seo?: NextSeoProps;
}

const Layout: React.FC<LayoutProps> = ({ children, seo }) => {
  return (
    <>
      <NextSeo {...seo} />
      <div className="w-full h-screen overflow-y-scroll text-gray-300 bg-background">
        <div className="flex flex-col flex-1 w-full max-w-screen-xl mx-auto">
          <NavBar />
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
