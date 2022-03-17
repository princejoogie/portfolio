import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const router = useRouter();

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-6 bg-black px-4 py-12">
      <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-20">
        <button
          type="button"
          onClick={() => router.replace("/#about")}
          className="focus:bg-gray-800 focus:outline-none"
        >
          <p className="uppercase text-gray-400">About</p>
        </button>

        <button
          type="button"
          onClick={() => router.replace("/#projects")}
          className="focus:bg-gray-800 focus:outline-none"
        >
          <p className="uppercase text-gray-400">Projects</p>
        </button>

        <button
          type="button"
          onClick={() => router.replace("/#contact")}
          className="focus:bg-gray-800 focus:outline-none"
        >
          <p className="uppercase text-gray-400">Contact</p>
        </button>

        <Link href="https://blog.princecaarlo.tech">
          <p className="cursor-pointer text-center uppercase text-gray-400">
            Blogs
          </p>
        </Link>
      </div>
      <p className="text-center font-semibold">
        Prince Carlo Juguilon © 2021 All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
