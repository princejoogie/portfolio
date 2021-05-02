import React from "react";
import { useRouter } from "next/router";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-12 space-y-6 bg-black">
      <div className="flex space-x-20">
        <button
          onClick={() => router.replace("/#about")}
          className="focus:outline-none"
        >
          <p className="text-gray-400 uppercase">About</p>
        </button>

        <button
          onClick={() => router.replace("/#projects")}
          className="focus:outline-none"
        >
          <p className="text-gray-400 uppercase">Projects</p>
        </button>

        <button
          onClick={() => router.replace("/#contact")}
          className="focus:outline-none"
        >
          <p className="text-gray-400 uppercase">Contact</p>
        </button>

        <button
          onClick={() => router.replace("/blog")}
          className="focus:outline-none"
        >
          <p className="text-gray-400 uppercase">Blogs</p>
        </button>
      </div>
      <p className="font-semibold">
        Prince Carlo Juguilon © 2021 All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
