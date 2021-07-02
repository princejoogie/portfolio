import React, { useContext } from "react";
import Image from "next/image";
import { ScreenContext } from "src/contexts/ScreenContext";

interface JumbotronProps {}

const Jumbotron: React.FC<JumbotronProps> = () => {
  const { width } = useContext(ScreenContext);

  return (
    <div
      data-aos="zoom-out"
      data-aos-delay={`${7 * 100}`}
      className="relative flex flex-row w-full p-8 shadow-2xl floatCard rounded-xl"
      style={{
        height: width >= 1024 ? "max(70vh, 768px)" : "auto",
      }}
    >
      <div className="absolute inset-0 opacity-70 rounded-xl bg-gradient-to-br from-startpoint via-midpoint to-startpoint" />

      <div className="z-10 flex flex-col justify-center w-full lg:px-20 lg:w-7/12">
        <h1
          data-aos="fade-right"
          data-aos-delay={`${8 * 100}`}
          className="text-4xl font-bold tracking-tight text-center text-gray-200 lg:text-left md:text-5xl lg:text-7xl"
        >
          Prince Carlo <br /> Juguilon.
        </h1>

        <p
          data-aos="fade-right"
          data-aos-delay={`${9 * 100}`}
          className="my-12 font-mono text-base text-center text-gray-400 lg:text-left lg:text-lg"
        >
          a <span className="font-bold">Software Engineer </span>based in the
          Philippines, <span className="font-bold">React </span>
          enthusiast, fond of creating{" "}
          <span className="font-bold">interactive </span>and{" "}
          <span className="font-bold">responsive </span>layouts for web and
          mobile applications.
        </p>

        <div className="flex items-center justify-center space-x-4 lg:items-start lg:justify-start">
          <a
            data-aos="zoom-in-up"
            data-aos-delay={`${10 * 100}`}
            href="/#contact"
            className="px-4 py-2 text-xs text-white transition-colors duration-300 ease-out bg-gray-600 rounded cursor-pointer lg:px-10 lg:text-base hover:bg-gray-700 focus:outline-none"
          >
            <p>Chat with Me</p>
          </a>

          <button
            data-aos="zoom-in-up"
            data-aos-delay={`${11 * 100}`}
            className="flex items-center justify-center px-4 py-2 space-x-2 text-white transition-colors duration-300 ease-out bg-green-600 rounded hover:bg-green-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p className="text-xs lg:text-base">Resume</p>
          </button>
        </div>
      </div>

      {width >= 1024 && (
        <div
          data-aos="fade-left"
          data-aos-delay={`${8 * 100}`}
          className="absolute bottom-0 right-0 w-1/2 -top-8"
        >
          <Image objectFit="contain" src="/t1.png" layout="fill" />
        </div>
      )}
    </div>
  );
};

export default Jumbotron;
