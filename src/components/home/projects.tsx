import Image from "next/image";
import type { ReactNode } from "react";
import { constants } from "@/lib/utils";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";

const { projects, socials } = constants;

export const Projects = () => {
  const projectCards: ReactNode[] = [];

  for (const project of projects) {
    if (!project.enabled) {
      continue;
    }

    projectCards.push(
      <BentoCard
        icon={
          <Image
            src={project.icon}
            className="size-8 overflow-hidden rounded-md"
            alt={project.title}
            width={32}
            height={32}
          />
        }
        key={project.title}
        name={project.title}
        description={project.description}
        href={project.github ?? "#"}
        hrefProps={{ target: "_blank", rel: "noreferrer" }}
        cta="Learn More"
        className="col-span-1"
        background={
          <Image
            className="absolute inset-x-0 top-0 object-contain opacity-50"
            src={project.src}
            alt={project.title}
            width={1920}
            height={1440}
          />
        }
      />,
    );
  }

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full items-center justify-between">
        <h2 className="mb-8 font-semibold text-3xl text-neutral-500 tracking-tight lg:text-6xl">
          Projects.
        </h2>

        <span>
          <a
            href={socials.github}
            className="text-blue-400 text-sm transition-opacity hover:opacity-70"
            target="_blank"
            rel="noreferrer"
          >
            See more →
          </a>
        </span>
      </div>

      <BentoGrid>{projectCards}</BentoGrid>
    </div>
  );
};
