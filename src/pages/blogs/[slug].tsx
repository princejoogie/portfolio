import type { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Markdown from "../../components/markdown";
import Layout from "../../components/layout";

interface GSP {
  frontMatter: {
    title: string;
    description: string;
  };
  content: string;
  /* slug: string; */
}

const Blog = ({ frontMatter, content }: GSP) => {
  return (
    <Layout>
      <h1>{frontMatter.title}</h1>
      <p>{frontMatter.description}</p>

      <Markdown content={content} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const blogPath = "src/blogs";
  let files = fs.readdirSync(path.join(blogPath));
  files = files.filter((e) => e.endsWith(".md"));

  const blogs = files.map((file) => {
    return {
      params: {
        slug: file.replace(".md", ""),
      },
    };
  });

  return { paths: blogs, fallback: false };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const blogPath = "src/blogs";
  const slug = params?.slug;

  if (!slug || typeof slug !== "string") {
    return { notFound: true };
  }

  const mdData = fs.readFileSync(path.join(blogPath, `${slug}.md`), "utf8");
  const { data, content } = matter(mdData);

  return {
    props: {
      frontMatter: data,
      content,
      slug,
    },
  };
};

export default Blog;
