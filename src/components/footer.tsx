import Link from "next/link";

import { constants } from "@/lib/utils";

const footerLinks = [
  { label: "GitHub", href: constants.socials.github, external: true },
  { label: "LinkedIn", href: constants.socials.linkedin, external: true },
  { label: "X", href: constants.socials.twitter, external: true },
] as const;

export const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border py-8 text-sm text-muted-foreground">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Prince Carlo Juguilon.</p>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center gap-x-4 gap-y-2"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer noopener" : undefined}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};
