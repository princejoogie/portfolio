import React from "react";
import FBicon from "../assets/facebook.svg";
import GHicon from "../assets/github.svg";
import IGicon from "../assets/instagram.svg";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div className="flex flex-row justify-between w-full px-6 py-12">
      <div className="flex flex-row ">
        <button className="px-8 hover:bg-blue-100 focus:bg-blue-100 rounded-xl">
          <p className="font-mono text-sm text-blue-500">{"< About />"}</p>
        </button>

        <button className="px-8 hover:bg-blue-100 focus:bg-blue-100 rounded-xl">
          <p className="font-mono text-sm text-gray-500">{"< Projects />"}</p>
        </button>

        <button className="px-8 hover:bg-blue-100 focus:bg-blue-100 rounded-xl">
          <p className="font-mono text-sm text-gray-500">{"< Contact />"}</p>
        </button>

        <button className="px-8 hover:bg-blue-100 focus:bg-blue-100 rounded-xl">
          <p className="font-mono text-sm text-gray-500">{"< Blog />"}</p>
        </button>
      </div>

      <div className="flex flex-row space-x-6">
        <button className="flex items-center justify-center p-3 bg-blue-100 rounded-full group">
          <div className="w-6 h-6 text-gray-500 group-hover:text-blue-500">
            <FBicon />
          </div>
        </button>

        <button className="flex items-center justify-center p-3 bg-blue-100 rounded-full group">
          <div className="w-6 h-6 text-gray-500 group-hover:text-blue-500">
            <IGicon />
          </div>
        </button>

        <button className="flex items-center justify-center p-3 bg-blue-100 rounded-full group">
          <div className="w-6 h-6 text-gray-500 group-hover:text-blue-500">
            <GHicon />
          </div>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
