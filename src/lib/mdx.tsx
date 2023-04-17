/* eslint-disable @next/next/no-img-element */
import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

const rootDirectory = path.join(process.cwd(), "src", "blogs");

export interface MDXMeta {
  title?: string;
  description?: string;
  date?: string;
}

const components: MDXComponents = {
  code: (props) => {
    // @ts-expect-error - types
    if (props["data-language"]) {
      return <code {...props} />;
    }
    return <code className="bg-gray-700/60 p-1 rounded" {...props} />;
  },
  pre: (props) => (
    <pre
      className="p-2 bg-gray-800/30 text-base border-2 border-gray-800 my-2"
      {...props}
    />
  ),
  img: (props) => <img className="inline m-0" {...props} />,
  p: (props) => <p className="text-base my-2 text-justify" {...props} />,
  h1: (props) => <h1 className="font-semibold my-4" {...props} />,
  h2: (props) => <h2 className="font-semibold my-4" {...props} />,
  h3: (props) => <h3 className="font-semibold my-4" {...props} />,
  h4: (props) => <h4 className="font-semibold my-4" {...props} />,
  h5: (props) => <h5 className="font-semibold my-4" {...props} />,
};

const prettyCodeOptions: Partial<Options> = {
  theme: "one-dark-pro",
  keepBackground: false,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("bg-gray-700");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["bg-gray-700"];
  },
};

export const getBlogBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
  const { frontmatter, content } = await compileMDX<MDXMeta>({
    source: fileContent,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
          [rehypePrettyCode, prettyCodeOptions],
        ],
      },
    },
    components,
  });
  return { meta: { ...frontmatter, slug: realSlug }, content };
};

export type BlogItem = Awaited<ReturnType<typeof getBlogBySlug>>;

export const getAllBlogsMeta = async () => {
  const files = fs.readdirSync(rootDirectory);
  const posts = [];
  for (const file of files) {
    const { meta } = await getBlogBySlug(file);
    posts.push(meta);
  }
  return posts;
};

export type AllBlogsMeta = Awaited<ReturnType<typeof getAllBlogsMeta>>;
