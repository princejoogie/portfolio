import React from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  content: string;
}

const Markdown = ({ content }: MarkdownProps) => {
  return (
    <article className="prose">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default Markdown;
