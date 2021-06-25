import React, { useState } from "react";
import Image from "next/image";
import ImageModal from "../ImageModal";
import {
  jsIcon,
  tsIcon,
  githubIcon as GHicon,
  expandIcon as ExpandIcon,
  javaIcon,
} from "src/assets/svgs";
import { AnimatePresence } from "framer-motion";

interface ItemProps {
  Icon: any;
  src: string;
  github?: string;
  title: string;
  date: string;
}

const ProjectItem: React.FC<ItemProps> = ({
  Icon,
  src,
  title,
  date,
  github,
}) => {
  const [modalShown, setModalShown] = useState(false);

  return (
    <div>
      <AnimatePresence>
        {modalShown && <ImageModal {...{ setModalShown, src }} />}
      </AnimatePresence>
      <div className="relative flex items-center justify-center overflow-hidden rounded-xl group">
        <div className="absolute z-20 w-10/12 p-4 transition-all duration-500 bg-black opacity-0 rounded-xl h-5/6 group-hover:opacity-60 group-hover:w-full group-hover:h-full">
          <div className="flex items-center">
            <div className="flex-1">
              <h1>Chamaeleon</h1>
            </div>

            <button
              className="absolute top-4 right-4 group focus:outline-none"
              onClick={() => setModalShown(!modalShown)}
            >
              <ExpandIcon className="w-6 h-6 text-gray-400 transition-all group-focus:text-white group-active:w-5 group-active:h-5" />
            </button>
          </div>
        </div>
        <div className="relative image-container">
          <Image src={src} alt={src} layout="fill" />
        </div>
      </div>

      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 overflow-hidden rounded-md">
            <Icon />
          </div>

          <p className="text-sm">{title}</p>
        </div>

        <div className="flex items-center">
          {!!github && (
            <a
              className="w-6 h-6 mr-4 overflow-hidden rounded-md focus:outline-none"
              href="https://github.com/princejoogie/chamaeleon"
              target="_blank"
            >
              <GHicon />
            </a>
          )}
          <p className="text-xs text-gray-300">{date}</p>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-300 lg:text-6xl">
        Projects.
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        <ProjectItem
          Icon={tsIcon}
          src="/projects/pythagoras.png"
          title="Jookey"
          github="https://github.com/princejoogie/jookey"
          date="Apr 25, 2020"
        />
        <ProjectItem
          Icon={tsIcon}
          src="/projects/chamaeleon.png"
          title="Genesis"
          github="https://github.com/apc-genesis"
          date="Apr 16, 2020"
        />
        <ProjectItem
          Icon={jsIcon}
          src="/projects/chamaeleon.png"
          title="Joog Uno"
          github="https://github.com/princejoogie/hiwam0"
          date="Mar 29, 2020"
        />
        <ProjectItem
          Icon={jsIcon}
          src="/projects/pythagoras.png"
          title="Pythagoras"
          github="https://github.com/princejoogie/pythagoras"
          date="Oct 11, 2020"
        />
        <ProjectItem
          Icon={jsIcon}
          src="/projects/chamaeleon.png"
          title="Chamaeleon"
          github="https://github.com/princejoogie/chamaeleon"
          date="Sep 07, 2020"
        />
        <ProjectItem
          Icon={javaIcon}
          src="/projects/pythagoras.png"
          title="uApp"
          github="https://github.com/princejoogie/uaap_app"
          date="Oct 7, 2019"
        />
      </div>
    </div>
  );
};

export default Projects;
