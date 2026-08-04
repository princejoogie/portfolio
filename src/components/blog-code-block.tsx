"use client";

import { Braces, Check, Copy, FileCode2, TerminalSquare } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type BlogCodeBlockProps = {
  children: React.ReactNode;
  code: string;
  language: string;
};

const getLanguageIcon = (language: string) => {
  const normalized = language.toLowerCase();

  if (["bash", "shell", "sh", "zsh", "console"].includes(normalized)) {
    return TerminalSquare;
  }

  if (["json", "yaml", "yml", "toml"].includes(normalized)) {
    return Braces;
  }

  return FileCode2;
};

export const BlogCodeBlock = ({
  children,
  code,
  language,
}: BlogCodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const Icon = getLanguageIcon(language);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="not-prose overflow-hidden rounded-md border border-white/10 bg-[#292d3e] text-[#babed8]">
      <div className="flex items-center justify-between border-white/10 border-b bg-[#252837] px-3 py-1.5">
        <div className="flex items-center gap-2 text-slate-300 text-xs uppercase tracking-[0.14em]">
          <Icon className="size-4" />
          <span className="text-xs">{language}</span>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-6 gap-1.5 px-2 text-slate-300 text-xs hover:bg-white/10 hover:text-white"
          onClick={handleCopy}
        >
          {copied ? (
            <Check className="size-3.5" />
          ) : (
            <Copy className="size-3.5" />
          )}
          <span>{copied ? "Copied" : "Copy"}</span>
        </Button>
      </div>

      {children}
    </div>
  );
};
