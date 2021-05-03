import { NextSeo, NextSeoProps } from "next-seo";
import React, { useContext } from "react";
import Particles from "react-particles-js";
import { ScreenContext } from "src/contexts/ScreenContext";
import Footer from "../Footer";

interface BlogLayoutProps {
  seo?: NextSeoProps;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ seo, children }) => {
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
        <div className="flex flex-col flex-1 w-full max-w-screen-xl px-4 mx-auto space-x-0 lg:flex-row lg:space-x-4">
          {children}
        </div>
        <div className="h-24 md:h-32" />
        <Footer />
      </div>
    </>
  );
};

export default BlogLayout;
