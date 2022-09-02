import React from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  content: string;
}

const Markdown = ({ content }: MarkdownProps) => {
  return (
    <article className="prose prose-invert">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default Markdown;
