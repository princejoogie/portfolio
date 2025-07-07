"use client";

import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { Slot } from "@radix-ui/react-slot";
import type { Route } from "next";
import Link from "next/link";
import { useState } from "react";
import { constants } from "@/lib/utils";
import { FadeComponent, FadeText } from "./magicui/fade-text";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const { socials } = constants;

type LinkProps<T extends string> = {
  title: string;
  path: Route<T>;
};

type SocialProps = {
  icon: React.ReactNode;
  href: string;
  label?: string;
};

const LinkItem = <T extends string>({ title, path }: LinkProps<T>) => {
  return (
    <Link href={path} aria-label={title}>
      <div className="group rounded p-2 transition-colors duration-300 ease-out hover:bg-gray-800 focus:bg-gray-800 focus:outline-none">
        <FadeText
          className="!font-mono !text-sm !text-gray-400 !group-hover:text-blue-300"
          direction="down"
          text={title}
        />
      </div>
    </Link>
  );
};

const Social = ({ href, label, icon }: SocialProps) => {
  return (
    <FadeComponent direction="down">
      <a
        target="_blank"
        href={href}
        aria-label={label}
        className="group block rounded-full p-2 transition-colors duration-300 ease-out hover:bg-gray-800 focus:bg-gray-800 focus:outline-none"
        rel="noreferrer"
      >
        <Slot className="h-6 w-6 text-gray-500 transition-colors group-hover:fill-gray-400 group-hover:text-blue-300">
          {icon}
        </Slot>
      </a>
    </FadeComponent>
  );
};

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="z-10 flex w-full flex-row justify-between pt-12 pb-6">
        <div className="hidden lg:block">
          <div className="flex flex-row items-center justify-center space-x-2">
            <LinkItem title="< About />" path="/" />
            <LinkItem title="< Projects />" path="/#projects" />
            <LinkItem title="< Blog />" path="/blogs" />
          </div>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild aria-label="Hamburger menu">
            <button type="button" className="block lg:hidden">
              <FadeComponent direction="down">
                <div className="flex flex-row items-center justify-center space-x-2 text-gray-400 hover:text-blue-300 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <title>Menu</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </div>
              </FadeComponent>
            </button>
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
          <Social
            href={socials.github}
            icon={<SiGithub />}
            label="Github link"
          />
          <Social
            href={socials.linkedin}
            icon={<SiGithub />}
            label="Linkedin link"
          />
          <Social href={socials.twitter} icon={<SiX />} label="X link" />
        </div>
      </div>
    </div>
  );
};
