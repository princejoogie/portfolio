import type { Metadata } from "next";

import { About } from "@/components/home/about";
import { JsonLd } from "@/components/json-ld";
import {
  getBreadcrumbSchema,
  getPersonSchema,
  getProfilePageSchema,
  getWebsiteSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "About Prince Carlo Juguilon",
  description:
    "Background, experience, and engineering interests of Prince Carlo Juguilon, a Senior Software Engineer in the Philippines.",
  alternates: {
    canonical: "/about",
    types: { "text/markdown": "/about.md" },
  },
  openGraph: {
    type: "profile",
    title: "About Prince Carlo Juguilon",
    description:
      "Background, experience, and engineering interests of Prince Carlo Juguilon.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <article>
      <JsonLd
        data={[
          getPersonSchema(),
          getWebsiteSchema(),
          getProfilePageSchema(),
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <About />
    </article>
  );
}
