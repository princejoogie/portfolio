import ReactMarkdown from "react-markdown";
import { CodeBlock } from "./code-block";

interface MarkdownProps {
  content: string;
}

export const Markdown = ({ content }: MarkdownProps) => {
  return (
    <article className="prose-prose-pre:p-0 prose-lg prose-invert prose-pre:m-0 prose-pre:my-4 prose-pre:rounded-md prose-pre:p-0">
      <ReactMarkdown
        components={{
          img: ({ src, alt, ...rest }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img {...rest} src={src} alt={alt} className="!my-2 inline" />
          ),
          code: ({ node, inline, className, children, ...props }) => {
            const language = /language-(\w+)/.exec(className ?? "")?.[1];

            if (inline) {
              return (
                <code className="inline bg-gray-800 px-2 py-1" {...props}>
                  {children}
                </code>
              );
            }

            if (language) {
              return (
                <CodeBlock
                  {...props}
                  content={String(children).replace(/\n$/, "")}
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
