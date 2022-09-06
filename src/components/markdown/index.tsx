import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { CodeBlock } from "./code-block";

interface MarkdownProps {
  content: string;
}

export const Markdown = ({ content }: MarkdownProps) => {
  return (
    <article className="prose-prose-pre:p-0 prose-lg prose-invert prose-pre:m-0 prose-pre:my-4 prose-pre:rounded-md prose-pre:p-0">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
        ]}
        components={{
          h1: ({ ...rest }) => (
            <h1
              {...rest}
              className="my-4 border-b-2 border-gray-800 pb-3 text-3xl font-semibold lg:text-4xl"
            />
          ),
          h2: ({ ...rest }) => (
            <h2
              {...rest}
              className="my-4 border-b border-gray-800 pb-2 text-2xl font-semibold lg:text-3xl"
            />
          ),
          h3: ({ ...rest }) => (
            <h3 {...rest} className="my-4 text-xl font-semibold lg:text-2xl" />
          ),
          h4: ({ ...rest }) => (
            <h4 {...rest} className="my-4 text-lg font-semibold lg:text-xl" />
          ),
          h5: ({ ...rest }) => (
            <h5 {...rest} className="my-4 text-lg font-semibold lg:text-xl" />
          ),
          h6: ({ ...rest }) => (
            <h6 {...rest} className="my-4 text-lg font-semibold lg:text-xl" />
          ),
          p: ({ className, ...rest }) => (
            <p {...rest} className="my-3 text-justify text-gray-300" />
          ),
          ul: ({ ordered, ...rest }) => <ul {...rest} className="list-disc" />,
          img: ({ src, alt, ...rest }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img {...rest} src={src} alt={alt} className="my-0 inline" />
          ),
          code: ({ node, inline, className, children, ...props }) => {
            const language = /language-(\w+)/.exec(className ?? "")?.[1];

            if (inline) {
              return (
                <code
                  className="inline rounded border border-gray-700 bg-gray-800 px-2 py-1 text-green-500"
                  {...props}
                >
                  {children}
                </code>
              );
            }

            if (language) {
              return (
                <CodeBlock
                  {...props}
                  content={children.toString().replace(/\n$/, "")}
                  language={language}
                />
              );
            }

            return <>{children}</>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};
