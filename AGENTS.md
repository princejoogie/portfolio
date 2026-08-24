# Portfolio Agent Notes

## Commands

- Use `pnpm` only. The lockfile pins `pnpm@10.33.0`.
- `pnpm dev`: run the local Next dev server.
- `pnpm check`: check formatting with oxfmt, then lint with oxlint.
- `pnpm format`: format supported files and sort imports and Tailwind classes.
- `pnpm lint`: run type-aware oxlint rules for TypeScript, React, accessibility, and Next.js.
- `pnpm build`: closest thing to full verification; there is no separate test or typecheck script.
- `pnpm start`: run the production build.

## App Shape

- This is a single Next.js 16 app-router project, not a monorepo.
- `src/app/layout.tsx` owns the global shell, default SEO metadata, hardcoded Google Analytics injection, and the background pattern.
- `src/app/page.tsx` is the real home entrypoint. It is a server component that loads blog metadata and renders the tabbed homepage.
- `src/app/blog/page.tsx` does not render its own page; it redirects to `/?tab=Blogs`.
- `src/app/blog/[slug]/page.tsx` statically builds blog post pages from local MDX content and also generates per-post OG image metadata.
- `src/app/api/og/route.tsx` generates OG images with `@vercel/og`.

## Content And Data

- Blog posts live in `src/blogs/*.mdx`.
- `src/lib/mdx.tsx` is the content pipeline: it reads files directly from `src/blogs`, parses frontmatter with `compileMDX`, and wires custom MDX components plus rehype/remark plugins.
- New blog posts need frontmatter that matches the current usage: `title`, `description`, and `date`.
- Blog ordering comes from `getAllBlogsMeta()` sorting by `date`; broken or missing dates will affect listing order.

## Conventions That Matter

- Import from `@/*`; `tsconfig.json` maps that alias to `src/*`.
- oxfmt enforces double quotes, import organization, and Tailwind class sorting, including classes passed through `clsx`, `cva`, and `cn`.
- oxlint runs type-aware TypeScript rules plus React, accessibility, import, and Next.js checks.
- `cn()` from `src/lib/utils.ts` is the local class merge helper.
- `components.json` shows shadcn-style aliases: `@/components/ui` and `@/components/magicui` are already part of the project structure.

## Tooling Quirks

- Tailwind v4 is enabled through `@tailwindcss/postcss` in `postcss.config.js`, but the repo still keeps `tailwind.config.js` for theme/plugins and shadcn config.
- `next.config.mjs` enables bundle analysis only when `ANALYZE=true`.
- `getBaseUrl()` checks Vercel deployment URLs and falls back to the production domain outside development.
