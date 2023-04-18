import type { TypeIcon } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { socials } from "@/utils/constants";

interface LinkProps<T extends string> {
  title: string;
  path: Route<T>;
}

interface SocialProps {
  Icon: typeof TypeIcon;
  href: string;
}

const LinkItem = <T extends string>({ title, path }: LinkProps<T>) => {
  return (
    <Link href={path}>
      <div className="group rounded p-2 transition-colors duration-300 ease-out hover:bg-gray-800 focus:bg-gray-800 focus:outline-none">
        <p className="font-mono text-sm text-gray-400 group-hover:text-blue-300">
          {title}
        </p>
      </div>
    </Link>
  );
};

const Social = ({ href, Icon }: SocialProps) => {
  return (
    <a
      target="_blank"
      href={href}
      className="group block rounded-full p-2 transition-colors duration-300 ease-out hover:bg-gray-800 focus:bg-gray-800 focus:outline-none"
      rel="noreferrer"
    >
      <Icon className="h-6 w-6 text-gray-500 group-hover:text-blue-300" />
    </a>
  );
};

export const NavBar = () => {
  return (
    <div className="z-10 flex w-full flex-row justify-between pt-12 pb-6">
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

      <div className="flex flex-row items-center space-x-2">
        <Social href={socials.github} Icon={Github} />
        <Social href={socials.linkedin} Icon={Linkedin} />
        <Social href={socials.twitter} Icon={Twitter} />
      </div>
    </div>
  );
};
