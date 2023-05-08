"use client";

import type { TypeIcon } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { constants } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const { socials } = constants;

interface LinkProps<T extends string> {
  title: string;
  path: Route<T>;
}

interface SocialProps {
  Icon: typeof TypeIcon;
  href: string;
  label?: string;
}

const LinkItem = <T extends string>({ title, path }: LinkProps<T>) => {
  return (
    <Link href={path} aria-label={title}>
      <div className="group rounded p-2 transition-colors duration-300 ease-out hover:bg-gray-800 focus:bg-gray-800 focus:outline-none">
        <p className="font-mono text-sm text-gray-400 group-hover:text-blue-300">
          {title}
        </p>
      </div>
    </Link>
  );
};

const Social = ({ href, label, Icon }: SocialProps) => {
  return (
    <a
      target="_blank"
      href={href}
      aria-label={label}
      className="group block rounded-full p-2 transition-colors duration-300 ease-out hover:bg-gray-800 focus:bg-gray-800 focus:outline-none group"
      rel="noreferrer"
    >
      <Icon className="h-6 w-6 text-gray-500 group-hover:text-blue-300 group-hover:fill-gray-400 transition-colors" />
    </a>
  );
};

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-10 flex w-full flex-row justify-between pt-12 pb-6">
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-center space-x-2">
          <LinkItem title="< About />" path="/" />
          <LinkItem title="< Projects />" path="/#projects" />
          <LinkItem title="< Blog />" path="/blogs" />
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger aria-label="Hamburger menu">
          <div className="block lg:hidden">
            <div className="flex flex-row items-center justify-center space-x-2 text-gray-400 hover:text-blue-300 focus:outline-none">
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
            </div>
          </div>
        </DialogTrigger>
        <DialogContent>
          <div className="flex flex-col items-center justify-center space-y-2">
            <LinkItem title="< About />" path="/" />
            <LinkItem title="< Projects />" path="/#projects" />
            <LinkItem title="< Blog />" path="/blogs" />
          </div>
        </DialogContent>
      </Dialog>

      <div className="flex flex-row items-center space-x-2">
        <Social href={socials.github} Icon={Github} label="Github link" />
        <Social href={socials.linkedin} Icon={Linkedin} label="Linkedin link" />
        <Social href={socials.twitter} Icon={Twitter} label="Twitter link" />
      </div>
    </div>
  );
};
