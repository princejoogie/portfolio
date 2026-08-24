import type { Metadata } from "next";

import { Setup } from "@/components/home/setup";
import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Setup | Prince Carlo Juguilon",
  description:
    "Prince Juguilon's Linux and macOS environment, Neovim workflow, AI coding tools, automation, and desk setup.",
  alternates: {
    canonical: "/setup",
    types: { "text/markdown": "/setup.md" },
  },
  openGraph: {
    type: "website",
    title: "Setup | Prince Carlo Juguilon",
    description:
      "Prince Juguilon's Linux and macOS environment, Neovim workflow, AI coding tools, automation, and desk setup.",
    url: "/setup",
  },
};

export default function SetupPage() {
  return (
    <article>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Setup", path: "/setup" },
        ])}
      />
      <Setup />
    </article>
  );
}
