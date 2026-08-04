import Link from "next/link";
import { constants } from "@/lib/utils";

const footerLinks = [
  { label: "GitHub", href: constants.socials.github },
  { label: "LinkedIn", href: constants.socials.linkedin },
  { label: "X", href: constants.socials.twitter },
] as const;

export const Footer = () => {
  return (
    <footer className="mt-16 border-border border-t py-8 text-muted-foreground text-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Prince Carlo Juguilon.</p>
        <nav aria-label="Footer navigation" className="flex items-center gap-4">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
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
