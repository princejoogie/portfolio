import { PrismAsync as Highlighter } from "react-syntax-highlighter";
import { highlighterStyle } from "./style";

interface CodeBlockProps {
  language?: string;
  content: string | string[];
  [key: string]: any;
}

export const CodeBlock = ({ language, content, ...props }: CodeBlockProps) => {
  return (
    <Highlighter
      {...props}
      language={language}
      style={highlighterStyle}
      wrapLongLines
    >
      {content}
    </Highlighter>
  );
};
