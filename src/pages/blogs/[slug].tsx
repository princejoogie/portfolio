import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { Markdown } from "@/components/markdown";
import { Layout } from "@/components/layout";
import { type TBlog, getBlogBySlug, getBlogPaths } from "@/utils/helpers";

const Blog = ({ content, frontMatter }: TBlog) => {
  return (
    <Layout>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
      </Head>

      <Markdown content={content} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: getBlogPaths(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<TBlog> = async ({ params }) => {
  const slug = params?.slug;

  if (!slug || typeof slug !== "string") {
    return { notFound: true };
  }

  return {
    props: getBlogBySlug(slug),
  };
};

export default Blog;
