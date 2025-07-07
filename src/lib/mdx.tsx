import fs from "node:fs";
import path from "node:path";
import { ExternalLink, Link } from "lucide-react";
import type { MDXComponents } from "mdx/types";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import type { BuiltinTheme } from "shiki";

const rootDirectory = path.join(process.cwd(), "src", "blogs");

export type MDXMeta = {
  title?: string;
  description?: string;
  date?: string;
};

const components: MDXComponents = {
  code: (props) => {
    if (props["data-language"]) {
      return <code {...props} />;
    }
    return <code className="rounded bg-gray-700 p-1" {...props} />;
  },
  pre: (props) => (
    <pre
      className="my-2 whitespace-pre-wrap border-2 border-border bg-background p-2 text-base"
      {...props}
    />
  ),
  a: ({ children, href, ...props }) => {
    const isExternal = Boolean(href?.startsWith("http"));
    return (
      <a
        className={`m-0 inline-flex items-center space-x-1 ${
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
  // biome-ignore lint/performance/noImgElement: okay
  // biome-ignore lint/a11y/useAltText: okay
  img: (props) => <img className="m-0 mt-1 inline" {...props} />,
  p: (props) => <p className="my-2 text-base text-gray-300" {...props} />,
  h1: ({ children, ...props }) => (
    <h1 className="group relative my-4 font-semibold" {...props}>
      <div className="-left-6 invisible absolute top-0 bottom-0 grid place-items-center xl:visible">
        <Link
          className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
          aria-label={String(children)}
        />
      </div>
      <span>{children}</span>
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="group relative mt-6 mb-2 font-semibold" {...props}>
      <div className="-left-6 invisible absolute top-0 bottom-0 grid place-items-center xl:visible">
        <Link
          className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
          aria-label={String(children)}
        />
      </div>
      <span>{children}</span>
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="group relative mt-6 mb-2 font-semibold" {...props}>
      <div className="-left-6 invisible absolute top-0 bottom-0 grid place-items-center xl:visible">
        <Link
          className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
          aria-label={String(children)}
        />
      </div>
      <span>{children}</span>
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="group relative mt-6 mb-2 font-semibold" {...props}>
      <div className="-left-6 invisible absolute top-0 bottom-0 grid place-items-center xl:visible">
        <Link
          className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
          aria-label={String(children)}
        />
      </div>
      <span>{children}</span>
    </h4>
  ),
  h5: ({ children, ...props }) => (
    <h5 className="group relative mt-6 mb-2 font-semibold" {...props}>
      <div className="-left-6 invisible absolute top-0 bottom-0 grid place-items-center xl:visible">
        <Link
          className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
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

const theme: BuiltinTheme = "material-theme-palenight";

const prettyCodeOptions: Partial<Options> = {
  theme,
  keepBackground: false,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className?.push("bg-gray-700");
  },
  onVisitHighlightedChars(node) {
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

export const formatBlogDate = (date: string) => {
  const dateArray = date.split(" ");
  const month = dateArray[0];
  const day = dateArray[1];
  const year = dateArray[2];

  return `${month.slice(0, 3)} ${day} ${year}`;
};

export type AllBlogsMeta = Awaited<ReturnType<typeof getAllBlogsMeta>>;
