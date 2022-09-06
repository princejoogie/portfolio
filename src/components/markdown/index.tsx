import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { CodeBlock } from "./code-block";

interface MarkdownProps {
  content: string;
}

type TOC = Array<{ id: string; text: string | null; level: number }>;

export const Markdown = ({ content }: MarkdownProps) => {
  const mdRef = useRef<HTMLElement>(null);
  const [toc, setToc] = useState<TOC>([]);

  useEffect(() => {
    const headers = mdRef.current?.querySelectorAll("h2, h3");
    const toc: TOC = [];

    headers?.forEach((h) => {
      const id = h.id;
      const text = h.textContent;
      const level = parseInt(h.tagName.toLowerCase().replace("h", "")) - 2;
      toc.push({ id, text, level });
    });

    setToc(toc);

    const observer = new IntersectionObserver(
      (entries) => {
        console.log({ entries });
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (id) {
            const tocItem = document.querySelector(`#toc-${id}`);
            console.log({ tocItem });
            if (tocItem) {
              if (entry.isIntersecting) {
                console.log("intersecting", id);
                tocItem.classList.add("observer-active");
              } else {
                console.log("not intersecting", id);
                tocItem.classList.remove("observer-active");
              }
            }
          }
        });
      },
      { threshold: 1 }
    );

    headers?.forEach((h) => observer.observe(h));

    return () => {
      headers?.forEach((h) => observer.unobserve(h));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex space-x-8">
      <article
        ref={mdRef}
        className="prose-prose-pre:p-0 prose-lg prose-invert flex-1 prose-pre:m-0 prose-pre:my-4 prose-pre:rounded-md prose-pre:p-0"
      >
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
              <h3
                {...rest}
                className="my-4 text-xl font-semibold lg:text-2xl"
              />
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
            p: ({ ...rest }) => (
              <p {...rest} className="my-0 text-justify text-gray-300" />
            ),
            ul: ({ ordered, ...rest }) => (
              <ul {...rest} className="my-0 list-disc" />
            ),
            li: ({ ordered, ...rest }) => <li {...rest} className="my-0" />,
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

      {toc.length > 0 && (
        <div className="sticky top-14 self-start">
          <h2 className="font-bold">On this page</h2>
          <ul className="ml-2 mt-2 text-sm">
            {toc.map((item) => (
              <li
                key={item.id}
                id={`toc-${item.id}`}
                className={`mt-2 text-gray-400 hover:text-gray-100 ${
                  item.level === 0 ? "ml-0" : "ml-4"
                }`}
              >
                <a href={`#${item.id}`}>
                  {item.level > 0 && (
                    <svg
                      width="3"
                      height="24"
                      viewBox="0 -9 3 24"
                      className="mr-2 inline"
                    >
                      <path
                        d="M0 0L3 3L0 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  )}
                  <span>{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
