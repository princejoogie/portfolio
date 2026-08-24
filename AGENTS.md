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
- `src/app/page.tsx` redirects human visitors to `/about`; `src/proxy.ts` still intercepts root agent-mode and markdown requests.
- `/about`, `/blog`, `/setup`, and `/contact` are dedicated App Router pages linked by the persistent site navigation.
- `src/app/blog/[slug]/page.tsx` statically builds blog post pages from local MDX content and also generates per-post OG image metadata.
- `src/app/api/og/route.tsx` generates OG images with `@vercel/og`.
- `src/app/api/v1` exposes public read-only portfolio JSON, while `/api/mcp` and `/api/mcp/docs` expose separate portfolio and documentation MCP servers.
- `src/proxy.ts` handles the homepage's `?mode=agent` representation and `Accept: text/markdown` negotiation.

## Content And Data

- Blog posts live in `src/blogs/*.mdx`.
- `src/lib/mdx.tsx` is the content pipeline: it reads files directly from `src/blogs`, parses frontmatter with `compileMDX`, and wires custom MDX components plus rehype/remark plugins.
- New blog posts need frontmatter that matches the current usage: `title`, `description`, and `date`.
- Blog ordering comes from `getAllBlogsMeta()` sorting by `date`; broken or missing dates will affect listing order.
- Agent discovery files, markdown fallbacks, MCP cards, and the OpenAPI contract live in `public/`; keep every URL declared in `public/llms.txt` resolvable.
- `src/lib/structured-data.ts` is shared by in-page JSON-LD and the NLWeb schema feed.

## Conventions That Matter

- Import from `@/*`; `tsconfig.json` maps that alias to `src/*`.
- oxfmt enforces double quotes, import organization, and Tailwind class sorting, including classes passed through `clsx`, `cva`, and `cn`.
- oxlint runs type-aware TypeScript rules plus React, accessibility, import, and Next.js checks.
- `cn()` from `src/lib/utils.ts` is the local class merge helper.
- `components.json` shows shadcn-style aliases: `@/components/ui` and `@/components/magicui` are already part of the project structure.

## Tooling Quirks

- Tailwind v4 is enabled through `@tailwindcss/postcss` in `postcss.config.js`, but the repo still keeps `tailwind.config.js` for theme/plugins and shadcn config.
- `next.config.mjs` enables bundle analysis only when `ANALYZE=true`.
- `getBaseUrl()` uses localhost during development and always returns `https://prince.juguilon.com` for production and preview builds; canonical URLs must never use Vercel deployment domains.
