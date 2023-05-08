/* eslint-disable @next/next/no-img-element */
import fs from "fs";
import path from "path";
import type { Theme } from "shiki";
import type { MDXComponents } from "mdx/types";
import { Link, ExternalLink } from "lucide-react";
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
      className="p-2 bg-background text-base border-2 border-border my-2 whitespace-pre-wrap"
      {...props}
    />
  ),
  a: ({ children, href, ...props }) => {
    const isExternal = Boolean(href?.startsWith("http"));
    return (
      <a
        className={`inline-flex items-center space-x-1 m-0 ${
          isExternal ? "text-blue-400" : "text-white"
        }`}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        href={href}
        aria-label={String(children)}
        {...props}
      >
        <span>{children}</span>
        {isExternal && <ExternalLink className="h-3 w-3" />}
      </a>
    );
  },
  img: (props) => <img className="inline m-0 mt-1" {...props} />,
  p: (props) => <p className="text-base my-2 text-gray-300" {...props} />,
  h1: ({ children, ...props }) => (
    <h1 className="font-semibold my-4 relative group" {...props}>
      <div className="invisible xl:visible absolute top-0 bottom-0 -left-6 grid place-items-center">
        <Link
          className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label={String(children)}
        />
      </div>
      <span>{children}</span>
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="font-semibold mt-6 mb-2 relative group" {...props}>
      <div className="invisible xl:visible absolute top-0 bottom-0 -left-6 grid place-items-center">
        <Link
          className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label={String(children)}
        />
      </div>
      <span>{children}</span>
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="font-semibold mt-6 mb-2 relative group" {...props}>
      <div className="invisible xl:visible absolute top-0 bottom-0 -left-6 grid place-items-center">
        <Link
          className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label={String(children)}
        />
      </div>
      <span>{children}</span>
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="font-semibold mt-6 mb-2 relative group" {...props}>
      <div className="invisible xl:visible absolute top-0 bottom-0 -left-6 grid place-items-center">
        <Link
          className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label={String(children)}
        />
      </div>
      <span>{children}</span>
    </h4>
  ),
  h5: ({ children, ...props }) => (
    <h5 className="font-semibold mt-6 mb-2 relative group" {...props}>
      <div className="invisible xl:visible absolute top-0 bottom-0 -left-6 grid place-items-center">
        <Link
          className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label={String(children)}
        />
      </div>
      <span>{children}</span>
    </h5>
  ),
  ul: (props) => <ul className="list-disc text-base" {...props} />,
  ol: (props) => <ol className="list-decimal text-base" {...props} />,
  span: (props) => <span className="break-all" {...props} />,
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
  const sorted = posts.sort((a, b) => {
    if (new Date(a.date ?? "") < new Date(b.date ?? "")) return 1;
    else return -1;
  });
  return sorted;
};

export type AllBlogsMeta = Awaited<ReturnType<typeof getAllBlogsMeta>>;
