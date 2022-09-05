import Link from "next/link";
import type { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { Layout } from "@/components/layout";

interface GSP {
  blogs: Array<{
    frontMatter: {
      title: string;
      description: string;
    };
    slug: string;
  }>;
}

const Blogs = ({ blogs }: GSP) => {
  return (
    <Layout>
      <h1>Blogs</h1>

      <div className="mt-4 grid grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <Link href={`/blogs/${blog.slug}`} key={blog.slug}>
            <a className="flex flex-col rounded-md border-2 border-gray-800 bg-black p-4">
              <h2>{blog.frontMatter.title}</h2>
              <p>{blog.frontMatter.description}</p>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogPath = "src/blogs";
  let files = fs.readdirSync(path.join(blogPath));
  files = files.filter((e) => e.endsWith(".md"));

  const blogs = files.map((file) => {
    const mdData = fs.readFileSync(path.join(blogPath, file), "utf8");
    const { data } = matter(mdData);
    return {
      frontMatter: data,
      slug: file.replace(".md", ""),
    };
  });

  return { props: { blogs } };
};

export default Blogs;
