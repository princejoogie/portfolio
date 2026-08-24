import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import { constants, getBaseUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects | Prince Carlo Juguilon",
  description:
    "Selected AI, commerce, web, mobile, and open-source projects built by Prince Carlo Juguilon.",
  alternates: {
    canonical: "/projects",
    types: { "text/markdown": "/projects.md" },
  },
  openGraph: {
    type: "website",
    title: "Projects | Prince Carlo Juguilon",
    description:
      "Selected AI, commerce, web, mobile, and open-source projects built by Prince Carlo Juguilon.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  const baseUrl = getBaseUrl();

  return (
    <article>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Projects by Prince Carlo Juguilon",
            description:
              "Selected AI, commerce, web, mobile, and open-source projects.",
            url: `${baseUrl}/projects`,
            author: { "@id": `${baseUrl}/#person` },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: constants.projects.map((project, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "CreativeWork",
                  name: project.title,
                  description: project.description,
                  url: project.href ?? project.github ?? `${baseUrl}/projects`,
                },
              })),
            },
          },
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
        ]}
      />
      <header>
        <h2 className="text-2xl">Selected projects</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Public products and open-source work across AI, commerce, mobile, and
          developer tooling. Live and source links are included where they are
          still available.
        </p>
      </header>

      <div className="mt-8 divide-y divide-border">
        {constants.projects.map((project) => (
          <article
            key={project.title}
            className="grid gap-4 py-6 first:pt-0 sm:grid-cols-[10rem_1fr]"
          >
            <div className="relative aspect-video overflow-hidden rounded-md border border-border bg-muted sm:aspect-[4/3]">
              <Image
                fill
                alt={`${project.title} project preview`}
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 160px"
                src={project.src}
              />
            </div>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <span className="text-xs text-muted-foreground">
                  {project.subtitle} · {project.date}
                </span>
              </div>
              <p className="mt-2 text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-3 flex gap-4 text-sm">
                {project.href ? (
                  <Link
                    className="underline underline-offset-4"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Visit project
                  </Link>
                ) : null}
                {project.github ? (
                  <Link
                    className="underline underline-offset-4"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    View source
                  </Link>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </article>
  );
}
