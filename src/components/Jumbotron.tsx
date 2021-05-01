import React from "react";
import Image from "next/image";

interface JumbotronProps {}

const Jumbotron: React.FC<JumbotronProps> = () => {
  return (
    <div
      className="relative flex flex-row w-full p-10 bg-blue-50 rounded-xl"
      style={{
        height: "max(70vh, 768px)",
      }}
    >
      <div className="flex flex-col w-7/12 px-20 justify-evenly">
        <h1 className="text-6xl font-semibold text-gray-800">
          Prince Carlo <br /> Juguilon,
        </h1>

        <p className="font-mono text-lg text-gray-600">
          a <span className="font-semibold">Software Developer </span>based in
          the Philippines, <span className="font-semibold">React </span>
          enthusiast, fond of creating{" "}
          <span className="font-semibold">interactive </span>and{" "}
          <span className="font-semibold">responsive </span>layouts for web and
          mobile applications.
        </p>

        <div className="flex space-x-4">
          <button className="px-10 py-2 text-gray-200 bg-blue-500 rounded focus:outline-none">
            <p>Chat with Me</p>
          </button>

          <button className="p-2 text-gray-800 bg-green-300 rounded focus:outline-none">
            <p>Resume</p>
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
