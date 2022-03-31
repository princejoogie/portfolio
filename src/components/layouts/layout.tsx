import { NextSeo, NextSeoProps } from "next-seo";
import React from "react";
import Particles from "react-tsparticles";
import Footer from "../footer";
import NavBar from "../navbar";

interface LayoutProps {
  seo?: NextSeoProps;
}

const Layout: React.FC<LayoutProps> = ({ children, seo }) => {
  return (
    <div className="z-[1] w-full bg-background text-gray-300 lg:bg-transparent">
      <NextSeo {...seo} />

      <div
        className="fixed inset-0 hidden bg-background lg:block"
        style={{ zIndex: -1 }}
      >
        <Particles
          options={{
            particles: {
              color: {
                value: "#ffffff",
              },
              lineLinked: {
                enable: false,
              },
              move: {
                bounce: false,
                direction: "none",
                enable: true,
                outMode: "out",
                random: true,
                speed: 0.1,
                straight: false,
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0,
                  speed: 1,
                  sync: false,
                },
                random: true,
                value: 1,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 3,
              },
            },
          }}
        />
      </div>

      <div className="mx-auto flex w-full max-w-screen-xl flex-1 flex-col px-4">
        <NavBar />
        {children}
      </div>

      <Footer />
    </div>
    // </div>
  );
};

export default Layout;
