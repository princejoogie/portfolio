import Highlighter from "react-syntax-highlighter/dist/cjs/prism-light";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import { highlighterStyle } from "./style";

Highlighter.registerLanguage("javascript", javascript);
Highlighter.registerLanguage("typescript", typescript);
Highlighter.registerLanguage("jsx", jsx);
Highlighter.registerLanguage("tsx", tsx);
Highlighter.registerLanguage("bash", bash);
Highlighter.registerLanguage("json", json);

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
