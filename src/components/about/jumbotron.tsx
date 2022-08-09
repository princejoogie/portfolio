import React from "react";
import Image from "next/image";

interface JumbotronProps {}

const Jumbotron: React.FC<JumbotronProps> = () => {
  return (
    <div
      data-aos="zoom-out"
      data-aos-delay={`${7 * 100}`}
      className="floatCard relative flex h-auto w-full flex-row rounded-xl p-8 shadow-2xl lg:h-[calc(max(70vh,678px))]"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-startpoint via-midpoint to-startpoint opacity-70" />

      <div className="z-10 flex w-full flex-col justify-center lg:w-7/12 lg:px-20">
        <h1
          data-aos="fade-right"
          data-aos-delay={`${8 * 100}`}
          className="text-center text-4xl font-bold tracking-tight text-gray-200 md:text-5xl lg:text-left lg:text-7xl"
        >
          Prince Carlo <br /> Juguilon.
        </h1>

        <p
          data-aos="fade-right"
          data-aos-delay={`${9 * 100}`}
          className="my-12 text-center font-mono text-base text-gray-400 lg:text-left lg:text-lg"
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
            className="cursor-pointer rounded bg-gray-600 px-4 py-2 text-xs text-white transition-colors duration-300 ease-out hover:bg-gray-700 focus:outline-none lg:px-10 lg:text-base"
          >
            <p>Chat with Me</p>
          </a>

          <button
            type="button"
            data-aos="zoom-in-up"
            data-aos-delay={`${11 * 100}`}
            className="flex items-center justify-center space-x-2 rounded bg-green-600 px-4 py-2 text-white transition-colors duration-300 ease-out hover:bg-green-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            <a
              target="_blank"
              download
              href="/assets/JUGUILON_RESUME.pdf"
              className="text-xs lg:text-base"
            >
              Resume
            </a>
          </button>
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-delay={`${8 * 100}`}
        className="absolute bottom-0 right-0 -top-8 hidden w-1/2 lg:block"
      >
        <Image objectFit="contain" src="/t1.png" layout="fill" />
      </div>
    </div>
  );
};

export default Jumbotron;
