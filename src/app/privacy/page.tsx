import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Privacy Policy - Prince Juguilon Portfolio",
  description:
    "Privacy information for prince.juguilon.com, including analytics, public API data, external services, and contact details.",
  alternates: {
    canonical: "/privacy",
    types: { "text/markdown": "/privacy.md" },
  },
  openGraph: {
    type: "website",
    title: "Privacy Policy - Prince Juguilon Portfolio",
    description:
      "How the Prince Juguilon portfolio handles analytics, public data, and external services.",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <article>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ])}
      />
      <h2 className="text-2xl">Privacy policy</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Effective August 24, 2026
      </p>
      <div className="mt-5 space-y-6 text-muted-foreground">
        <section>
          <h3 className="font-medium text-foreground">Information collected</h3>
          <p className="mt-2">
            This is a public personal portfolio. It does not provide user
            accounts, accept payments, or store information submitted through a
            first-party form. The site uses Google Analytics to understand
            aggregate traffic such as page visits, approximate location, browser
            type, and referring pages. Google may set cookies or process
            technical identifiers under its own terms. The hosting and security
            providers may also process IP addresses and request metadata to
            deliver the site, prevent abuse, and diagnose failures.
          </p>
        </section>
        <section>
          <h3 className="font-medium text-foreground">Public portfolio data</h3>
          <p className="mt-2">
            The REST API, OpenAPI document, markdown files, schema feed, and MCP
            servers publish professional information that is already intended to
            be public: profile details, resume content, project links, and
            article metadata. These interfaces are read-only. Consumers may
            cache or index the public responses, so do not treat information
            exposed through them as private.
          </p>
        </section>
        <section>
          <h3 className="font-medium text-foreground">External services</h3>
          <p className="mt-2">
            Links to GitHub, LinkedIn, X, Cal.com, project websites, and other
            external services leave this domain. Booking a call opens Cal.com,
            which processes the information you choose to submit according to
            its privacy policy. This site does not receive your account
            passwords or payment details from those services.
          </p>
        </section>
        <section>
          <h3 className="font-medium text-foreground">
            Questions and requests
          </h3>
          <p className="mt-2">
            For a privacy question or a request concerning information on this
            site, email{" "}
            <Link className="underline" href="mailto:princejoogie@gmail.com">
              princejoogie@gmail.com
            </Link>
            . Include the relevant page or resource URL so the request can be
            evaluated accurately. This policy will be updated when the site
            begins collecting information in a materially different way.
          </p>
        </section>
      </div>
    </article>
  );
}
