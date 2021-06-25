import React from "react";
import Image from "next/image";
import { jsIcon, tsIcon, githubIcon as GHicon } from "src/assets/svgs";

interface ItemProps {
  Icon: any;
  src: string;
  github?: string;
}

const ProjectItem: React.FC<ItemProps> = ({ Icon, src, github }) => {
  return (
    <div>
      <div className="relative flex items-center justify-center overflow-hidden bg-gray-300 rounded-xl group">
        <div className="absolute z-40 w-2/3 p-4 transition-all duration-500 bg-black opacity-0 rounded-xl h-2/3 group-hover:opacity-60 group-hover:w-full group-hover:h-full">
          <div className="flex-1">
            <h1>Chamaeleon</h1>
          </div>
          <a href="https://github.com/princejoogie/chamaeleon" target="_blank">
            Github
          </a>
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

          <p>Typescript</p>
        </div>

        <div className="w-6 h-6 overflow-hidden rounded-md">
          <GHicon />
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
        <ProjectItem Icon={jsIcon} src="/projects/chamaeleon.png" />
        <ProjectItem Icon={tsIcon} src="/projects/pythagoras.png" />
        <ProjectItem Icon={jsIcon} src="/projects/chamaeleon.png" />
        <ProjectItem Icon={tsIcon} src="/projects/pythagoras.png" />
        <ProjectItem Icon={jsIcon} src="/projects/chamaeleon.png" />
        <ProjectItem Icon={tsIcon} src="/projects/pythagoras.png" />
      </div>
    </div>
  );
};

export default Projects;
