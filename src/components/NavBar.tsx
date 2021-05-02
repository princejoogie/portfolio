import React, { useContext } from "react";
import LinkedinIcon from "../assets/linkedin.svg";
import GHicon from "../assets/github.svg";
import IGicon from "../assets/instagram.svg";
import { useRouter } from "next/router";
import { ScreenContext } from "src/contexts/ScreenContext";

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
  const { width } = useContext(ScreenContext);

  return (
    <div className="z-10 flex flex-row justify-between w-full px-2 py-12">
      {width > 1024 ? (
        <div className="flex flex-row items-center justify-center space-x-2">
          <Link title="< About />" path="/#about" />
          <Link title="< Projects />" path="/#projects" />
          <Link title="< Contact />" path="/#contact" />
          <Link title="< Blog />" path="/blog" />
        </div>
      ) : (
        <button className="flex flex-row items-center justify-center space-x-2 text-gray-400 focus:outline-none hover:text-blue-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
      )}

      <div className="flex flex-row items-center space-x-2 lg:space-x-6">
        <Social href="https://github.com/princejoogie/" icon={GHicon} />
        <Social
          href="https://www.linkedin.com/in/prince-carlo-juguilon-966623211/"
          icon={LinkedinIcon}
        />
        <Social href="https://www.instagram.com/princecaarlo/" icon={IGicon} />
      </div>
    </div>
  );
};

export default NavBar;
