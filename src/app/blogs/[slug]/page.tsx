import type { Metadata } from "next";
import Head from "next/head";

import { Markdown } from "@/components/markdown";
import { getBlogBySlug, getBlogPaths } from "@/utils/helpers";

export const generateStaticParams = () => {
  return getBlogPaths();
};

interface PageProps {
  params: ReturnType<typeof generateStaticParams>[number];
}

export const generateMetadata = ({ params }: PageProps): Metadata => {
  const { frontMatter } = getBlogBySlug(params.slug);
  return {
    title: frontMatter.title,
    description: frontMatter.description,
  };
};

const BlogItemPage = ({ params }: PageProps) => {
  const { content, frontMatter } = getBlogBySlug(params.slug);
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
      </Head>

      <Markdown content={content} />
    </>
  );
};

export default BlogItemPage;
