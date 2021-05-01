import React from "react";
import FBicon from "../assets/facebook.svg";
import GHicon from "../assets/github.svg";
import IGicon from "../assets/instagram.svg";
import { useRouter } from "next/router";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const router = useRouter();

  return (
    <div className="z-10 flex flex-row justify-between w-full px-6 py-12">
      <div className="flex flex-row space-x-2">
        <button
          onClick={() => router.push("/#about")}
          className="px-6 py-4 hover:bg-blue-100 focus:bg-blue-100 rounded-xl focus:outline-none"
        >
          <p className="font-mono text-sm text-blue-500">{"< About />"}</p>
        </button>

        <button
          onClick={() => router.push("/#projects")}
          className="px-6 py-4 hover:bg-blue-100 focus:bg-blue-100 rounded-xl focus:outline-none"
        >
          <p className="font-mono text-sm text-gray-500">{"< Projects />"}</p>
        </button>

        <button
          onClick={() => router.push("/#contact")}
          className="px-6 py-4 hover:bg-blue-100 focus:bg-blue-100 rounded-xl focus:outline-none"
        >
          <p className="font-mono text-sm text-gray-500">{"< Contact />"}</p>
        </button>

        <button
          onClick={() => router.push("/blog")}
          className="px-6 py-4 hover:bg-blue-100 focus:bg-blue-100 rounded-xl focus:outline-none"
        >
          <p className="font-mono text-sm text-gray-500">{"< Blog />"}</p>
        </button>
      </div>

      <div className="flex flex-row space-x-6">
        <button className="flex items-center justify-center p-3 rounded-full focus:outline-none hover:bg-blue-100 focus:bg-blue-100 group">
          <div className="w-6 h-6 text-gray-500 group-hover:text-blue-500">
            <FBicon />
          </div>
        </button>

        <button className="flex items-center justify-center p-3 rounded-full focus:outline-none hover:bg-blue-100 focus:bg-blue-100 group">
          <div className="w-6 h-6 text-gray-500 group-hover:text-blue-500">
            <IGicon />
          </div>
        </button>

        <button className="flex items-center justify-center p-3 rounded-full focus:outline-none hover:bg-blue-100 focus:bg-blue-100 group">
          <div className="w-6 h-6 text-gray-500 group-hover:text-blue-500">
            <GHicon />
          </div>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
