import Image from "next/image";
import { Github, Maximize2, ExternalLink } from "lucide-react";
import { constants } from "@/lib/utils";

const { projects, socials } = constants;

interface ItemProps {
  icon: string;
  src: string;
  title: string;
  subtitle: string;
  description?: string;
  date: string;
  github?: string;
  href?: string;
}

const ProjectItem = ({
  icon,
  src,
  title,
  subtitle,
  description,
  date,
  href,
  github,
}: ItemProps) => {
  return (
    <div>
      <div>
        <div className="group relative flex items-center justify-center overflow-hidden rounded-xl border-2 border-border">
          <div className="absolute z-20 h-5/6 w-10/12 rounded-md bg-black p-4 opacity-0 transition-all duration-500 group-hover:h-full group-hover:w-full group-hover:opacity-90">
            <div className="relative flex h-full flex-col items-start justify-end">
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-1 top-1"
                aria-label={title}
              >
                <Maximize2 className="h-6 w-6" />
              </a>
              <h1 className="font-bold">{title}</h1>
              <p className="text-xs text-gray-400 md:text-sm">{description}</p>
            </div>
          </div>
          <div className="image-container relative min-h-[300px]">
            <Image src={src} alt={src} width={1920} height={1440} />
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
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
                aria-label={`Visit ${title}`}
              >
                <ExternalLink className="h-6 w-6" />
              </a>
            )}
            {!!github && (
              <a
                className="mr-4 overflow-hidden rounded-md focus:outline-none"
                href={github}
                target="_blank"
                rel="noreferrer"
                aria-label={`Github page for ${title}`}
              >
                <Github className="h-6 w-6" />
              </a>
            )}
            <p className="text-xs text-gray-400">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full items-center justify-between">
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-500 lg:text-6xl">
          Projects.
        </h2>

        <span>
          <a
            href={socials.github}
            className="text-sm text-blue-400 transition-opacity hover:opacity-70"
            target="_blank"
            rel="noreferrer"
          >
            See more →
          </a>
        </span>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects
          .filter((e) => e.enabled)
          .map((p) => (
            <ProjectItem
              key={p.title}
              src={p.src}
              date={p.date}
              icon={p.icon}
              title={p.title}
              subtitle={p.subtitle}
              href={p.href ?? undefined}
              github={p.github ?? undefined}
              description={p.description}
            />
          ))}
      </div>
    </div>
  );
};
