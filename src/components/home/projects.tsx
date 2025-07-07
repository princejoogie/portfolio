import Image from "next/image";
import { constants } from "@/lib/utils";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";

const { projects, socials } = constants;

export const Projects = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full items-center justify-between">
        <h2 className="mb-8 font-bold text-3xl text-gray-500 tracking-tight lg:text-6xl">
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

      <BentoGrid>
        {projects
          .filter((e) => e.enabled)
          .map((p) => (
            <BentoCard
              icon={
                // biome-ignore lint/performance/noImgElement: okay
                <img
                  src={p.icon}
                  className="h-8 w-8 overflow-hidden rounded-md"
                  alt={p.icon}
                />
              }
              key={p.title}
              name={p.title}
              description={p.description}
              href={p.github ?? "#"}
              hrefProps={{ target: "_blank", rel: "noreferrer" }}
              cta="Learn More"
              className="col-span-1"
              background={
                <Image
                  className="absolute inset-x-0 top-0 object-contain opacity-50"
                  src={p.src}
                  alt={p.title}
                  width={1920}
                  height={1440}
                />
              }
            />
          ))}
      </BentoGrid>
    </div>
  );
};
