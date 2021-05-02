import React from "react";
import Image from "next/image";

interface JumbotronProps {}

const Jumbotron: React.FC<JumbotronProps> = () => {
  return (
    <div
      className="relative flex flex-row w-full p-10 shadow-2xl bg-opacity-30 blur-lg floatCard rounded-xl bg-gradient-to-br from-blue-50 via-green-100 to-blue-50"
      style={{
        height: "max(70vh, 768px)",
      }}
    >
      <div className="flex flex-col justify-center w-7/12 px-20">
        <h1 className="font-bold tracking-tight text-gray-800 text-7xl">
          Prince Carlo <br /> Juguilon.
        </h1>

        <p className="my-12 font-mono text-lg text-gray-600">
          a <span className="font-semibold">Software Developer </span>based in
          the Philippines, <span className="font-semibold">React </span>
          enthusiast, fond of creating{" "}
          <span className="font-semibold">interactive </span>and{" "}
          <span className="font-semibold">responsive </span>layouts for web and
          mobile applications.
        </p>

        <div className="flex space-x-4">
          <button className="px-10 py-2 text-white transition-colors duration-300 ease-out bg-blue-400 rounded hover:bg-blue-500 focus:outline-none">
            <p>Chat with Me</p>
          </button>

          <button className="flex items-center justify-center p-2 space-x-2 text-white transition-colors duration-300 ease-out bg-green-400 rounded hover:bg-green-500 focus:outline-none">
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
            <p className="text-sm">Resume</p>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-1/2 -top-8">
        <Image loading="lazy" objectFit="contain" src="/t1.png" layout="fill" />
      </div>
    </div>
  );
};

export default Jumbotron;
