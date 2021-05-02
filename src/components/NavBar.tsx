import React from "react";
import FBicon from "../assets/facebook.svg";
import GHicon from "../assets/github.svg";
import IGicon from "../assets/instagram.svg";
import { useRouter } from "next/router";

interface NavBarProps {}

interface LinkProps {
  title: string;
  path: string;
}

interface SocialProps {
  icon: React.FC;
  href: string;
}

const Link: React.FC<LinkProps> = ({ title, path }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(path)}
      className="px-6 py-4 transition-colors duration-300 ease-out group hover:bg-gray-800 focus:bg-gray-800 rounded-xl focus:outline-none"
    >
      <p className="font-mono text-sm text-gray-400 group-hover:text-blue-300">
        {title}
      </p>
    </button>
  );
};

const Social: React.FC<SocialProps> = ({ href, icon: Icon }) => {
  return (
    <div className="block w-12 h-12 p-3 transition-colors duration-300 ease-out rounded-full focus:outline-none hover:bg-gray-800 focus:bg-gray-800 group">
      <a
        href={href}
        target="_blank"
        className="text-gray-500 group-hover:text-blue-300"
      >
        <Icon />
      </a>
    </div>
  );
};

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div className="z-10 flex flex-row justify-between w-full px-6 py-12">
      <div className="flex flex-row space-x-2">
        <Link title="< About />" path="/#about" />
        <Link title="< Projects />" path="/#projects" />
        <Link title="< Contact />" path="/#contact" />
        <Link title="< Blog />" path="/blog" />
      </div>

      <div className="flex flex-row items-center space-x-6">
        <Social href="https://www.facebook.com/princecaarlo/" icon={FBicon} />
        <Social href="https://www.instagram.com/princecaarlo/" icon={IGicon} />
        <Social href="https://github.com/princejoogie/" icon={GHicon} />
      </div>
    </div>
  );
};

export default NavBar;
