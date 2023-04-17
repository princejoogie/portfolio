import type { Metadata } from "next";

import { getBlogBySlug, getAllBlogsMeta } from "@/lib/mdx";

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
  const url = `/api/og?title=${meta.title ?? ""}&description=${
    meta.description ?? ""
  }`;

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
  const { content } = await getBlogBySlug(params.slug);
  return content;
};

export default BlogItemPage;
