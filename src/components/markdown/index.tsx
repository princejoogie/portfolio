"use client";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { components } from "./style";

interface MarkdownProps {
  content: string;
}

type TOC = Array<{ id: string; text: string | null; level: number }>;

export const Markdown = ({ content }: MarkdownProps) => {
  const mdRef = useRef<HTMLElement>(null);
  const [toc, setToc] = useState<TOC>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        });
      },
      { rootMargin: "-10% 0px 0px 0px" }
    );

    const headers = mdRef.current?.querySelectorAll("h2, h3");
    const toc: TOC = [];

    headers?.forEach((h) => {
      observer.observe(h);
      const id = h.id;
      const text = h.textContent;
      const level = parseInt(h.tagName.toLowerCase().replace("h", "")) - 2;
      toc.push({ id, text, level });
    });

    setToc(toc);

    return () => {
      headers?.forEach((h) => {
        observer.unobserve(h);
      });
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
          components={components}
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
                className={`mt-2 ${item.level === 0 ? "ml-0" : "ml-4"} ${
                  activeId === item.id
                    ? "text-blue-500 underline"
                    : "text-gray-400 hover:text-gray-100 "
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
