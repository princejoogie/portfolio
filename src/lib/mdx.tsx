import fs from "node:fs";
import path from "node:path";
import { ExternalLink, Link } from "lucide-react";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { compileMDX } from "next-mdx-remote/rsc";
import { type ComponentProps, isValidElement, type ReactNode } from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import type { BuiltinTheme } from "shiki";
import { BlogCodeBlock } from "@/components/blog-code-block";
import { cn } from "@/lib/utils";

const rootDirectory = path.join(process.cwd(), "src", "blogs");

const extractTextContent = (node: ReactNode): string => {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(extractTextContent).join("");
  }

  if (!isValidElement(node)) {
    return "";
  }

  const props = node.props as {
    children?: ReactNode;
    [key: string]: unknown;
  };

  const text = extractTextContent(props.children);

  if (props["data-line"] !== undefined) {
    return `${text}\n`;
  }

  return text;
};

const getCodeLanguage = (node: ReactNode): string => {
  if (!isValidElement(node)) {
    return "text";
  }

  const props = node.props as {
    className?: string;
    [key: string]: unknown;
  };

  const language =
    typeof props["data-language"] === "string"
      ? props["data-language"]
      : props.className?.match(/language-([\w-]+)/)?.[1];

  return language ?? "text";
};

const normalizeCopiedCode = (code: string): string => {
  const lines = code.split("\n");
  const normalizedLines: string[] = [];

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];

    if (line.trim() !== "") {
      normalizedLines.push(line);
      continue;
    }

    let emptyLineCount = 1;

    while (index + emptyLineCount < lines.length) {
      if (lines[index + emptyLineCount]?.trim() !== "") {
        break;
      }
      emptyLineCount++;
    }

    if (emptyLineCount === 1) {
      index += emptyLineCount - 1;
      continue;
    }

    const preservedEmptyLines = Math.max(1, Math.ceil(emptyLineCount / 2));
    normalizedLines.push(
      ...Array.from({ length: preservedEmptyLines }, () => ""),
    );
    index += emptyLineCount - 1;
  }

  return normalizedLines.join("\n").trim();
};

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
    return <code className="rounded bg-neutral-700 p-1" {...props} />;
  },
  pre: ({ children, className, ...props }) => {
    const language = getCodeLanguage(children);
    const code = normalizeCopiedCode(extractTextContent(children));

    return (
      <BlogCodeBlock language={language} code={code}>
        <pre
          className={cn(
            "overflow-x-auto whitespace-pre-wrap break-words bg-transparent p-2 text-sm shadow-none outline-none",
            className,
          )}
          {...props}
        >
          {children}
        </pre>
      </BlogCodeBlock>
    );
  },
  a: ({ children, href, ...props }) => {
    const isExternal = Boolean(href?.startsWith("http"));
    return (
      <a
        className={`m-0 inline-flex items-center gap-x-1 ${
          isExternal ? "text-blue-400" : "text-white"
        }`}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        href={href}
        aria-label={String(children)}
        {...props}
      >
        <span>{children}</span>
        {isExternal && <ExternalLink className="size-3" />}
      </a>
    );
  },
  img: ({ alt = "", className, height, src, width, ...props }) => {
    if (typeof src !== "string") {
      return null;
    }

    const imageProps = props as Omit<
      ComponentProps<typeof Image>,
      "alt" | "className" | "height" | "src" | "width"
    >;

    return (
      <Image
        alt={String(alt)}
        className={cn("m-0 mt-1 inline h-auto max-w-full", className)}
        height={Number(height) || 450}
        src={src}
        unoptimized
        width={Number(width) || 800}
        {...imageProps}
      />
    );
  },
  p: (props) => <p className="my-2 text-base text-neutral-300" {...props} />,
  h1: ({ children, ...props }) => (
    <h1 className="group relative my-4 font-semibold" {...props}>
      <div className="invisible absolute top-0 bottom-0 -left-6 grid place-items-center xl:visible">
        <Link
          className="size-4 opacity-0 transition-opacity group-hover:opacity-100"
          aria-label={String(children)}
        />
      </div>
      <span>{children}</span>
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="group relative mt-6 mb-2 font-semibold" {...props}>
      <div className="invisible absolute top-0 bottom-0 -left-6 grid place-items-center xl:visible">
        <Link
          className="size-4 opacity-0 transition-opacity group-hover:opacity-100"
          aria-label={String(children)}
        />
      </div>
      <span>{children}</span>
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="group relative mt-6 mb-2 font-semibold" {...props}>
      <div className="invisible absolute top-0 bottom-0 -left-6 grid place-items-center xl:visible">
        <Link
          className="size-4 opacity-0 transition-opacity group-hover:opacity-100"
          aria-label={String(children)}
        />
      </div>
      <span>{children}</span>
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="group relative mt-6 mb-2 font-semibold" {...props}>
      <div className="invisible absolute top-0 bottom-0 -left-6 grid place-items-center xl:visible">
        <Link
          className="size-4 opacity-0 transition-opacity group-hover:opacity-100"
          aria-label={String(children)}
        />
      </div>
      <span>{children}</span>
    </h4>
  ),
  h5: ({ children, ...props }) => (
    <h5 className="group relative mt-6 mb-2 font-semibold" {...props}>
      <div className="invisible absolute top-0 bottom-0 -left-6 grid place-items-center xl:visible">
        <Link
          className="size-4 opacity-0 transition-opacity group-hover:opacity-100"
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
    node.properties.className?.push("bg-neutral-700");
  },
  onVisitHighlightedChars(node) {
    node.properties.className = ["bg-neutral-700"];
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
  const posts = await Promise.all(
    files.map(async (file) => {
      const { meta } = await getBlogBySlug(file);
      return meta;
    }),
  );
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
