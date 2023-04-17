/* eslint-disable @next/next/no-img-element */
import fs from "fs";
import path from "path";
import type { Theme } from "shiki";
import type { MDXComponents } from "mdx/types";
import { BiLink } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

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
      className="p-2 bg-gray-800/30 text-base border-2 border-gray-800 my-2 whitespace-pre-wrap"
      {...props}
    />
  ),
  a: ({ children, href, ...props }) => {
    const isExternal = Boolean(href?.startsWith("http"));
    return (
      <a
        className={`inline-flex items-center space-x-1 ${
          isExternal ? "text-blue-400" : "text-white"
        }`}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        href={href}
        {...props}
      >
        <span>{children}</span>
        {isExternal && <FiExternalLink className="h-3 w-3" />}
      </a>
    );
  },
  img: (props) => <img className="inline m-0 mt-1" {...props} />,
  p: (props) => <p className="text-base my-2 text-gray-300" {...props} />,
  h1: ({ children, ...props }) => (
    <h1 className="font-semibold my-4 relative group" {...props}>
      <div className="invisible xl:visible absolute top-1 bottom-0 -left-6 grid place-items-center">
        <BiLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <span>{children}</span>
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="font-semibold mt-6 mb-2 relative group" {...props}>
      <div className="invisible xl:visible absolute top-0 bottom-0 -left-6 grid place-items-center">
        <BiLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <span>{children}</span>
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="font-semibold mt-6 mb-2 relative group" {...props}>
      <div className="invisible xl:visible absolute top-0 bottom-0 -left-6 grid place-items-center">
        <BiLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <span>{children}</span>
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="font-semibold mt-6 mb-2 relative group" {...props}>
      <div className="invisible xl:visible absolute top-0 bottom-0 -left-6 grid place-items-center">
        <BiLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <span>{children}</span>
    </h4>
  ),
  h5: ({ children, ...props }) => (
    <h5 className="font-semibold mt-6 mb-2 relative group" {...props}>
      <div className="invisible xl:visible absolute top-0 bottom-0 -left-6 grid place-items-center">
        <BiLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <span>{children}</span>
    </h5>
  ),
};

const theme: Theme = "material-theme-palenight";

const prettyCodeOptions: Partial<Options> = {
  theme,
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
