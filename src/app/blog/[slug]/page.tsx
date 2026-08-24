import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import type { AllBlogsMeta } from "@/lib/mdx";
import { getAllBlogsMeta, getBlogBySlug } from "@/lib/mdx";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import { createSearchParams, getBaseUrl } from "@/lib/utils";

export const generateStaticParams = async () => {
  return await getAllBlogsMeta();
};

type PageProps = {
  params: Promise<AllBlogsMeta[number]>;
};

export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
  const params = await props.params;
  const { meta } = await getBlogBySlug(params.slug);
  const url = createSearchParams("/api/og", {
    title: meta.title ?? "",
    description: meta.description,
  });

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      type: "article",
      title: meta.title,
      description: meta.description,
      url: `/blog/${params.slug}`,
      publishedTime: meta.date,
      images: [
        {
          url,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
};

const BlogItemPage = async (props: PageProps) => {
  const params = await props.params;
  const { content, meta } = await getBlogBySlug(params.slug);
  const canonicalUrl = new URL(`/blog/${params.slug}`, getBaseUrl()).toString();

  return (
    <div className="flex flex-col gap-4 xl:flex-row">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: meta.title,
            description: meta.description,
            datePublished: meta.date,
            dateModified: meta.date,
            url: canonicalUrl,
            mainEntityOfPage: canonicalUrl,
            author: {
              "@type": "Person",
              "@id": `${getBaseUrl()}/#person`,
              name: "Prince Carlo Juguilon",
              url: getBaseUrl(),
            },
          },
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blogs", path: "/blog" },
            { name: meta.title ?? params.slug, path: `/blog/${params.slug}` },
          ]),
        ]}
      />
      <div className="w-full">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <Link
            href="/blog"
            replace
            className="flex items-center gap-x-1 transition-colors hover:text-blue-600 active:opacity-60"
            aria-label="Blogs page"
          >
            <ArrowLeft className="size-4" />
            <p>Back</p>
          </Link>

          <div>
            <p>{meta.date}</p>
          </div>
        </div>
        <article className="prose-sm max-w-none dark:prose-invert">
          {content}
        </article>
      </div>

      <hr className="my-2 border-border" />
    </div>
  );
};

export default BlogItemPage;
