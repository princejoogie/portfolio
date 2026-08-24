import type { Metadata } from "next";

import { Contact } from "@/components/home/contact";
import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contact Prince Carlo Juguilon",
  description:
    "Contact Prince Carlo Juguilon about senior software engineering, AI product development, and technical collaboration.",
  alternates: {
    canonical: "/contact",
    types: { "text/markdown": "/contact.md" },
  },
  openGraph: {
    type: "website",
    title: "Contact Prince Carlo Juguilon",
    description:
      "Contact Prince about software engineering, AI products, and technical collaboration.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <article>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Contact />
    </article>
  );
}
