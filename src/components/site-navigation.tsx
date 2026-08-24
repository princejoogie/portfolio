"use client";

import { m, useReducedMotion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MotionProvider } from "@/components/motion-provider";
import { cn } from "@/lib/utils";

const navigationItems = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blogs" },
  { href: "/setup", label: "Setup" },
  { href: "/contact", label: "Contact" },
] as const;

export const SiteNavigation = () => {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <MotionProvider>
      <nav
        aria-label="Portfolio sections"
        className="mb-8 flex flex-wrap gap-2"
      >
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
                <m.span
                  aria-hidden="true"
                  layoutId={
                    shouldReduceMotion ? undefined : "site-navigation-active"
                  }
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { type: "spring", duration: 0.25, bounce: 0.12 }
                  }
                  className="absolute inset-0 rounded-md bg-secondary"
                />
              ) : null}
              <span className="relative z-10">{label}</span>
            </Link>
          );
        })}
      </nav>
    </MotionProvider>
  );
};
