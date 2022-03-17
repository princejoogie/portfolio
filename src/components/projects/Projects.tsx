import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { BiExpand } from "react-icons/bi";
import ImageModal from "../ImageModal";

interface ItemProps {
  icon: string;
  src: string;
  title: string;
  subtitle: string;
  description?: string;
  date: string;
  github?: string;
  href?: string;
  i: number;
}

const ProjectItem: React.FC<ItemProps> = ({
  icon,
  src,
  title,
  subtitle,
  description,
  date,
  href,
  github,
  i,
}) => {
  const [modalShown, setModalShown] = useState(false);

  return (
    <div>
      <AnimatePresence>
        {modalShown && <ImageModal {...{ setModalShown, src }} />}
      </AnimatePresence>
      <div data-aos="zoom-in-up" data-aos-delay={`${i * 100}`}>
        <div className="group relative flex items-center justify-center overflow-hidden rounded-xl">
          <div className="absolute z-20 h-5/6 w-10/12 rounded-xl bg-black p-4 opacity-0 transition-all duration-500 group-hover:h-full group-hover:w-full group-hover:opacity-80">
            <div className="flex h-full flex-col items-start justify-end">
              <h1 className="font-bold">{title}</h1>

              <p className="text-xs text-gray-400 md:text-sm">{description}</p>

              <button
                type="button"
                className="group absolute top-4 right-4 h-6 w-6 text-gray-400 transition-all focus:text-white focus:outline-none active:h-5 active:w-5"
                onClick={() => setModalShown(!modalShown)}
              >
                <BiExpand className="h-full w-full" />
              </button>
            </div>
          </div>
          <div className="image-container relative min-h-[300px]">
            <Image src={src} alt={src} layout="fill" objectFit="cover" />
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={icon}
              className="h-8 w-8 overflow-hidden rounded-md"
              alt={icon}
            />

            <div>
              <p className="text-sm font-bold">{title}</p>
              <p className="text-xs text-gray-400">{subtitle}</p>
            </div>
          </div>

          <div className="flex items-center">
            {!!href && (
              <a
                className="mr-4 overflow-hidden rounded-md text-gray-300 focus:outline-none"
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <FiExternalLink className="h-6 w-6" />
              </a>
            )}
            {!!github && (
              <a
                className="mr-4 overflow-hidden rounded-md focus:outline-none"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="h-6 w-6" />
              </a>
            )}
            <p className="text-xs text-gray-400">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="flex w-full flex-col">
      <h1
        data-aos="fade-right"
        className="mb-8 text-3xl font-bold tracking-tight text-gray-300 lg:text-6xl"
      >
        Projects.
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        <ProjectItem
          i={1}
          icon="/assets/logos/typescript.svg"
          src="/assets/projects/jookey.png"
          title="Jookey"
          subtitle="Web & Mobile Application"
          description="A Fully encrypted Password Keeper app designed in React Native to keep track of your account passwords."
          github="https://github.com/princejoogie/jookey"
          date="Apr 25, 2020"
        />
        <ProjectItem
          i={2}
          icon="/assets/logos/typescript.svg"
          src="/assets/projects/genesis.png"
          title="Genesis"
          subtitle="Mobile Application"
          description="A Mobile application that can detect different types of Dog ticks and provide vivid descriptions about them. This is created with react-native and python and applies transfer & continuous learning to further improve the accuracy."
          github="https://github.com/apc-genesis"
          date="Apr 16, 2020"
        />
        <ProjectItem
          i={3}
          icon="/assets/logos/javascript.svg"
          src="/assets/projects/chamaeleon.png"
          title="Joog Uno"
          subtitle="Web Application"
          description="A free, fast, and customizable URL shortener created with React JS and tailwindcss."
          href="https://joog.uno/"
          github="https://github.com/princejoogie/hiwam0"
          date="Mar 29, 2020"
        />
        <ProjectItem
          i={1}
          icon="/assets/logos/javascript.svg"
          src="/assets/projects/pythagoras.png"
          title="Pythagoras"
          subtitle="Web Application"
          description="A commisioned build for Pythagoras Coffee & Tea, an Ecommerce website that aims to provide their products online created with NextJS."
          href="https://pythagoras.netlify.app/"
          github="https://github.com/princejoogie/pythagoras"
          date="Oct 11, 2020"
        />
        <ProjectItem
          i={2}
          icon="/assets/logos/javascript.svg"
          src="/assets/projects/chamaeleon.png"
          title="Chamaeleon"
          subtitle="Web Application"
          description="A commisioned build for a Startup IT Company, Chamaeleon Software, as their companies' website landing page and showcase of their products."
          href="https://chamaeleon.io/"
          github="https://github.com/princejoogie/chamaeleon"
          date="Sep 07, 2020"
        />
        <ProjectItem
          i={3}
          icon="/assets/logos/java.svg"
          src="/assets/projects/uApp.png"
          title="uApp"
          subtitle="Mobile Application"
          description="Provides an interface that eases the process of recording fouls, violations, referees that called them and all other basketball related topics. It also provides excel data of the summary of reports"
          github="https://github.com/princejoogie/uaap_app"
          date="Oct 7, 2019"
        />
      </div>
    </div>
  );
};

export default Projects;
