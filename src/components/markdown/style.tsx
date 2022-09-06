import type { NormalComponents } from "react-markdown/lib/complex-types";
import type { SpecialComponents } from "react-markdown/lib/ast-to-react";
import { CodeBlock } from "./code-block";

export const components: Partial<
  Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
> = {
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
  p: ({ ...rest }) => <p {...rest} className="my-0 text-justify" />,
  ul: ({ ordered, ...rest }) => <ul {...rest} className="my-0 list-disc" />,
  li: ({ ordered, ...rest }) => <li {...rest} className="my-0" />,
  ol: ({ ordered, ...rest }) => <ol {...rest} className="my-0 !list-decimal" />,
  img: ({ src, alt, ...rest }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...rest} src={src} alt={alt} className="my-0 inline" />
  ),
  blockquote: ({ ...rest }) => (
    <blockquote
      {...rest}
      className="my-2 border-l-4 border-gray-700 pl-4 text-justify text-gray-500"
    />
  ),
  code: ({ node, inline, className, children, ...props }) => {
    const language = /language-(\w+)/.exec(className ?? "")?.[1];

    if (inline) {
      return (
        <code
          {...props}
          className="inline rounded border border-gray-700 bg-gray-800 px-2 py-1 text-green-500"
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
};

interface Style {
  [key: string]: React.CSSProperties;
}

export const highlighterStyle: Style = {
  'pre[class*="language-"]': {
    color: "#d4d4d4",
    fontSize: "1rem",
    textShadow: "none",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1rem",
    margin: "0rem",
    overflow: "auto",
    background: "#171717",
    border: "2px solid #262626",
  },
  'code[class*="language-"]': {
    color: "#d4d4d4",
    textShadow: "none",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]::selection': {
    textShadow: "none",
    background: "#264F78",
  },
  'code[class*="language-"]::selection': {
    textShadow: "none",
    background: "#264F78",
  },
  'pre[class*="language-"] *::selection': {
    textShadow: "none",
    background: "#264F78",
  },
  'code[class*="language-"] *::selection': {
    textShadow: "none",
    background: "#264F78",
  },
  ':not(pre) > code[class*="language-"]': {
    padding: ".1em .3em",
    borderRadius: ".3em",
    color: "#db4c69",
    background: "#171717",
  },
  ".namespace": {
    opacity: ".7",
  },
  "doctype.doctype-tag": {
    color: "#569CD6",
  },
  "doctype.name": {
    color: "#9cdcfe",
  },
  comment: {
    color: "#6a9955",
  },
  prolog: {
    color: "#6a9955",
  },
  punctuation: {
    color: "#d4d4d4",
  },
  ".language-html .language-css .token.punctuation": {
    color: "#d4d4d4",
  },
  ".language-html .language-javascript .token.punctuation": {
    color: "#d4d4d4",
  },
  property: {
    color: "#9cdcfe",
  },
  tag: {
    color: "#569cd6",
  },
  boolean: {
    color: "#569cd6",
  },
  number: {
    color: "#b5cea8",
  },
  constant: {
    color: "#9cdcfe",
  },
  symbol: {
    color: "#b5cea8",
  },
  inserted: {
    color: "#b5cea8",
  },
  unit: {
    color: "#b5cea8",
  },
  selector: {
    color: "#d7ba7d",
  },
  "attr-name": {
    color: "#9cdcfe",
  },
  string: {
    color: "#ce9178",
  },
  char: {
    color: "#ce9178",
  },
  builtin: {
    color: "#ce9178",
  },
  deleted: {
    color: "#ce9178",
  },
  ".language-css .token.string.url": {
    textDecoration: "underline",
  },
  operator: {
    color: "#d4d4d4",
  },
  entity: {
    color: "#569cd6",
  },
  "operator.arrow": {
    color: "#569CD6",
  },
  atrule: {
    color: "#ce9178",
  },
  "atrule.rule": {
    color: "#c586c0",
  },
  "atrule.url": {
    color: "#9cdcfe",
  },
  "atrule.url.function": {
    color: "#dcdcaa",
  },
  "atrule.url.punctuation": {
    color: "#d4d4d4",
  },
  keyword: {
    color: "#569CD6",
  },
  "keyword.module": {
    color: "#c586c0",
  },
  "keyword.control-flow": {
    color: "#c586c0",
  },
  function: {
    color: "#dcdcaa",
  },
  "function.maybe-class-name": {
    color: "#dcdcaa",
  },
  regex: {
    color: "#d16969",
  },
  important: {
    color: "#569cd6",
  },
  italic: {
    fontStyle: "italic",
  },
  "class-name": {
    color: "#4ec9b0",
  },
  "maybe-class-name": {
    color: "#4ec9b0",
  },
  console: {
    color: "#9cdcfe",
  },
  parameter: {
    color: "#9cdcfe",
  },
  interpolation: {
    color: "#9cdcfe",
  },
  "punctuation.interpolation-punctuation": {
    color: "#569cd6",
  },
  variable: {
    color: "#9cdcfe",
  },
  "imports.maybe-class-name": {
    color: "#9cdcfe",
  },
  "exports.maybe-class-name": {
    color: "#9cdcfe",
  },
  escape: {
    color: "#d7ba7d",
  },
  "tag.punctuation": {
    color: "#808080",
  },
  cdata: {
    color: "#808080",
  },
  "attr-value": {
    color: "#ce9178",
  },
  "attr-value.punctuation": {
    color: "#ce9178",
  },
  "attr-value.punctuation.attr-equals": {
    color: "#d4d4d4",
  },
  namespace: {
    color: "#4ec9b0",
  },
  'pre[class*="language-javascript"]': {
    color: "#9cdcfe",
  },
  'code[class*="language-javascript"]': {
    color: "#9cdcfe",
  },
  'pre[class*="language-jsx"]': {
    color: "#9cdcfe",
  },
  'code[class*="language-jsx"]': {
    color: "#9cdcfe",
  },
  'pre[class*="language-typescript"]': {
    color: "#9cdcfe",
  },
  'code[class*="language-typescript"]': {
    color: "#9cdcfe",
  },
  'pre[class*="language-tsx"]': {
    color: "#9cdcfe",
  },
  'code[class*="language-tsx"]': {
    color: "#9cdcfe",
  },
  'pre[class*="language-css"]': {
    color: "#ce9178",
  },
  'code[class*="language-css"]': {
    color: "#ce9178",
  },
  'pre[class*="language-html"]': {
    color: "#d4d4d4",
  },
  'code[class*="language-html"]': {
    color: "#d4d4d4",
  },
  ".language-regex .token.anchor": {
    color: "#dcdcaa",
  },
  ".language-html .token.punctuation": {
    color: "#808080",
  },
  'pre[class*="language-"] > code[class*="language-"]': {
    position: "relative",
    zIndex: "1",
  },
  ".line-highlight.line-highlight": {
    background: "#f7ebc6",
    boxShadow: "inset 5px 0 0 #f7d87c",
    zIndex: "0",
  },
};
