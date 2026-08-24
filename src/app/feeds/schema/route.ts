import { getBlogPosts, getProjects } from "@/lib/portfolio";
import {
  getPersonSchema,
  getProfilePageSchema,
  getWebsiteSchema,
} from "@/lib/structured-data";
import { getBaseUrl } from "@/lib/utils";

export const GET = async () => {
  const [blogs, projects] = await Promise.all([
    getBlogPosts(),
    Promise.resolve(getProjects(true)),
  ]);
  const baseUrl = getBaseUrl();
  const records = [
    getPersonSchema(),
    getWebsiteSchema(),
    getProfilePageSchema(),
    ...projects.map((project) => ({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": `${baseUrl}/#project-${project.title
        .toLowerCase()
        .replaceAll(/[^a-z0-9]+/g, "-")}`,
      name: project.title,
      description: project.description,
      url: project.url ?? project.repository ?? baseUrl,
      image: project.image,
      author: { "@id": `${baseUrl}/#person` },
    })),
    ...blogs.map((blog) => ({
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${blog.url}#article`,
      headline: blog.title,
      description: blog.description,
      datePublished: blog.date,
      url: blog.url,
      author: { "@id": `${baseUrl}/#person` },
    })),
  ];
  const jsonl = `${records.map((record) => JSON.stringify(record)).join("\n")}\n`;

  return new Response(jsonl, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "Content-Type": "application/x-jsonlines; charset=utf-8",
    },
  });
};
