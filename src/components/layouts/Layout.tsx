import { NextSeo, NextSeoProps } from "next-seo";
import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import Particles from "react-particles-js";

interface LayoutProps {
  seo?: NextSeoProps;
}

const Layout: React.FC<LayoutProps> = ({ children, seo }) => {
  return (
    <div className="z-[1] w-full text-gray-300 bg-background lg:bg-transparent">
      <NextSeo {...seo} />

      <div
        className="fixed hidden lg:block inset-0 bg-background"
        style={{ zIndex: -1 }}
      >
        <Particles
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 2,
              },
            },
          }}
        />
      </div>

      <div className="flex flex-col flex-1 w-full max-w-screen-xl px-4 mx-auto">
        <NavBar />
        {children}
      </div>

      <Footer />
    </div>
    // </div>
  );
};

export default Layout;
