"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const navigationItems = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blogs" },
  { href: "/setup", label: "Setup" },
  { href: "/contact", label: "Contact" },
] as const;

export const SiteNavigation = () => {
  const pathname = usePathname();

  return (
    <nav aria-label="Portfolio sections" className="mb-8 flex flex-wrap gap-2">
      {navigationItems.map(({ href, label }) => {
        const isActive =
          pathname === href ||
          (href === "/blog" && pathname.startsWith("/blog/"));

        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "relative rounded-md px-2 py-1 text-sm transition-colors",
              isActive
                ? "text-secondary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {isActive ? (
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-md bg-secondary"
              />
            ) : null}
            <span className="relative z-10">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
};
