import React, { useMemo } from "react";
import { useRouter } from "next/router";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const date = useMemo(() => new Date(), []);
  const router = useRouter();

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-6 bg-black px-4 py-12">
      <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-20">
        <button
          type="button"
          onClick={() => router.replace("/")}
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

        <button
          type="button"
          onClick={() => router.replace("/blogs")}
          className="focus:bg-gray-800 focus:outline-none"
        >
          <p className="uppercase text-gray-400">Blogs</p>
        </button>
      </div>
      <p className="text-center font-semibold">
        Prince Carlo Juguilon © {date.getFullYear()} All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
