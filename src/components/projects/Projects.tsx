import React from "react";
import Image from "next/image";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <h1 className="text-3xl font-bold tracking-tight text-gray-300 lg:text-6xl">
        Projects.
      </h1>

      <div>
        <h2 className="text-gray-400">under development</h2>
      </div>

      <div className="w-1/2">
        <div className="relative overflow-hidden rounded image-container group">
          {/* <div className="absolute inset-0 z-40 flex items-center justify-center transition-opacity duration-500 bg-black opacity-0 group-hover:opacity-20">
            <a
              href="https://github.com/princejoogie/chamaeleon"
              target="_blank"
            >
              Github
            </a>
          </div> */}
          <Image
            src="/projects/chamaeleon.png"
            alt="chamaeleon_showcase"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
