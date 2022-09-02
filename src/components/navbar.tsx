import React from "react";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { IconType } from "react-icons";
import { socials } from "../utils/constants";

interface NavBarProps {}

interface LinkProps {
  title: string;
  path: string;
}

interface SocialProps {
  Icon: IconType;
  href: string;
}

const LinkItem: React.FC<LinkProps> = ({ title, path }) => {
  return (
    <Link href={path}>
      <a className="group rounded-xl px-6 py-4 transition-colors duration-300 ease-out hover:bg-gray-800 focus:bg-gray-800 focus:outline-none">
        <p className="font-mono text-sm text-gray-400 group-hover:text-blue-300">
          {title}
        </p>
      </a>
    </Link>
  );
};

const Social: React.FC<SocialProps> = ({ href, Icon }) => {
  return (
    <a
      target="_blank"
      href={href}
      className="group block rounded-full p-3 transition-colors duration-300 ease-out hover:bg-gray-800 focus:bg-gray-800 focus:outline-none"
      rel="noreferrer"
    >
      <Icon className="h-6 w-6 text-gray-500 group-hover:text-blue-300" />
    </a>
  );
};

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div className="z-10 flex w-full flex-row justify-between py-12">
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-center space-x-2">
          <LinkItem title="< About />" path="/" />
          <LinkItem title="< Projects />" path="/#projects" />
          <LinkItem title="< Blog />" path="/blogs" />
        </div>
      </div>

      <div className="block lg:hidden">
        <button
          type="button"
          className="flex flex-row items-center justify-center space-x-2 text-gray-400 hover:text-blue-300 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
      </div>

      <div className="flex flex-row items-center space-x-2 lg:space-x-6">
        <Social href={socials.github} Icon={AiFillGithub} />
        <Social href={socials.linkedin} Icon={AiFillLinkedin} />
        <Social href={socials.instagram} Icon={AiFillInstagram} />
      </div>
    </div>
  );
};

export default NavBar;
