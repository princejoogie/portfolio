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
  return {
    title: meta.title,
    description: meta.description,
  };
};

const BlogItemPage = async ({ params }: PageProps) => {
  const { content } = await getBlogBySlug(params.slug);
  return content;
};

export default BlogItemPage;
