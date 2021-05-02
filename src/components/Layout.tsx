import { NextSeo, NextSeoProps } from "next-seo";
import React, { useContext } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Particles from "react-particles-js";
import { ScreenContext } from "src/contexts/ScreenContext";

interface LayoutProps {
  seo?: NextSeoProps;
}

const Layout: React.FC<LayoutProps> = ({ children, seo }) => {
  const { width } = useContext(ScreenContext);

  return (
    <>
      {width >= 1024 && (
        <div className="absolute inset-0 bg-background" style={{ zIndex: -1 }}>
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
      )}

      <NextSeo {...seo} />

      <div className="z-50 w-full h-screen overflow-x-hidden overflow-y-scroll text-gray-300 bg-background lg:bg-transparent scrollbar scrollbar-thin scrollbar-track-background scrollbar-thumb-gray-700">
        <div className="flex flex-col flex-1 w-full max-w-screen-xl px-4 mx-auto">
          <NavBar />
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
