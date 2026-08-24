import type { MetadataRoute } from "next";
import { getAllBlogsMeta } from "@/lib/mdx";
import { getBaseUrl } from "@/lib/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrl();
  const blogs = await getAllBlogsMeta();

  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    {
      url: `${baseUrl}/developers`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: new Date(blog.date ?? ""),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
