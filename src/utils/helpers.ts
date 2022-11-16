import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const blogPath = "src/blogs";

export const getBlogs = () => {
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

  return blogs.sort(
    (a, b) =>
      new Date(b.frontMatter.date).getTime() -
      new Date(a.frontMatter.date).getTime()
  );
};

export interface TBlogs {
  blogs: ReturnType<typeof getBlogs>;
}

export const getBlogPaths = () => {
  let files = fs.readdirSync(path.join(blogPath));
  files = files.filter((e) => e.endsWith(".md"));

  const blogs = files.map((file) => {
    return {
      params: {
        slug: file.replace(".md", ""),
      },
    };
  });

  return blogs;
};

export const getBlogBySlug = (slug: string) => {
  const mdData = fs.readFileSync(path.join(blogPath, `${slug}.md`), "utf8");
  const { data, content } = matter(mdData);

  return {
    frontMatter: data,
    content,
    slug,
  };
};

export type TBlog = ReturnType<typeof getBlogBySlug>;
