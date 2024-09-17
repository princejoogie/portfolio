import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { getBlogBySlug, getAllBlogsMeta } from "@/lib/mdx";
import { createSearchParams } from "@/lib/utils";

export const generateStaticParams = async () => {
  return await getAllBlogsMeta();
};

interface PageProps {
  params: Awaited<ReturnType<typeof generateStaticParams>>[number];
}

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { meta } = await getBlogBySlug(params.slug);
  const url = createSearchParams("/api/og", {
    title: meta.title ?? "",
    description: meta.description,
  });

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
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

const BlogItemPage = async ({ params }: PageProps) => {
  const { content, meta } = await getBlogBySlug(params.slug);

  return (
    <div className="flex flex-col gap-4 xl:flex-row">
      <div className="w-full">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <Link
            href="/blog"
            replace
            className="flex items-center space-x-1 transition-colors hover:text-blue-600 active:opacity-60"
            aria-label="Blogs page"
          >
            <ArrowLeft className="h-4 w-4" />
            <p>Back</p>
          </Link>

          <div>
            <p>{meta.date}</p>
          </div>
        </div>
        <article className="prose-sm prose-invert">{content}</article>
      </div>

      <hr className="my-2 border-border" />
    </div>
  );
};

export default BlogItemPage;
