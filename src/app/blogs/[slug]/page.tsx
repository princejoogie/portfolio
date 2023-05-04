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
  const allBlogs = (await getAllBlogsMeta()).filter(
    (e) => e.slug !== params.slug
  );

  return (
    <div className="flex flex-col xl:flex-row gap-4">
      <div className="w-full xl:w-4/5">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <Link
            href="/blogs"
            replace
            className="flex items-center space-x-1 hover:text-blue-600 transition-colors active:opacity-60"
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

      <hr className="border-border my-2" />

      <div className="w-full xl:w-1/5">
        <h2 className="text-lg text-gray-400 ml-2">Read next</h2>

        <div className="flex flex-col space-y-2">
          {allBlogs.map(({ slug, description, title, date }) => (
            <Link key={`read-next-${slug}`} href={`/blogs/${slug}`}>
              <div className="hover:bg-gray-800 rounded p-2 flex flex-col space-y-1 transition-colors active:opacity-60">
                <h3 className="text-lg text-white">{title}</h3>
                <p className="text-sm text-gray-400">{description}</p>
                <p className="text-xs text-gray-500">{date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogItemPage;
