import type { Metadata } from "next";

import { Blogs } from "@/components/home/blogs";
import { JsonLd } from "@/components/json-ld";
import { getAllBlogsMeta } from "@/lib/mdx";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import { constants } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Blogs | ${constants.defaultSeo.title}`,
  description: constants.defaultSeo.description,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: `Blogs | ${constants.defaultSeo.title}`,
    description: constants.defaultSeo.description,
    url: "/blog",
  },
};

export default async function BlogPage() {
  const blogs = await getAllBlogsMeta();

  return (
    <article>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blogs", path: "/blog" },
        ])}
      />
      <Blogs blogs={blogs} />
    </article>
  );
}
