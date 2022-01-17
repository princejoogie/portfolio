import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-12 space-y-6 bg-black">
      <div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-20 lg:flex-row">
        <button
          onClick={() => router.replace("/#about")}
          className="focus:outline-none focus:bg-gray-800"
        >
          <p className="text-gray-400 uppercase">About</p>
        </button>

        <button
          onClick={() => router.replace("/#projects")}
          className="focus:outline-none focus:bg-gray-800"
        >
          <p className="text-gray-400 uppercase">Projects</p>
        </button>

        <button
          onClick={() => router.replace("/#contact")}
          className="focus:outline-none focus:bg-gray-800"
        >
          <p className="text-gray-400 uppercase">Contact</p>
        </button>

        <Link href="https://blog.princecaarlo.tech">
          <p className="text-gray-400 uppercase cursor-pointer">Blogs</p>
        </Link>
      </div>
      <p className="font-semibold text-center">
        Prince Carlo Juguilon © 2021 All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
