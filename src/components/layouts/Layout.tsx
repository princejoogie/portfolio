import { NextSeo, NextSeoProps } from "next-seo";
import React, { useContext } from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import Particles from "react-particles-js";
import { ScreenContext } from "src/contexts/ScreenContext";

interface LayoutProps {
  seo?: NextSeoProps;
}

const Layout: React.FC<LayoutProps> = ({ children, seo }) => {
  const { width } = useContext(ScreenContext);

  return (
    <div className="z-[1] w-full text-gray-300 bg-background lg:bg-transparent">
      <NextSeo {...seo} />

      {width >= 1024 && (
        <div className="fixed inset-0 bg-background" style={{ zIndex: -1 }}>
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
