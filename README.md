# Portfolio

Personal portfolio site for [prince.juguilon.com](https://prince.juguilon.com), built with Next.js 16, React 19, and Tailwind CSS.

## Overview

This project is a single-app Next.js portfolio with:

- a tabbed homepage for About, Blogs, Setup, and Contact
- statically generated MDX blog posts from local content
- dynamic Open Graph image generation via `@vercel/og`
- animated UI built with Motion, Magic UI components, and shadcn-style primitives
- a contact section wired to Cal.com embeds

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- oxlint and oxfmt for linting, formatting, and import organization
- `next-mdx-remote` for MDX content compilation
- `rehype-pretty-code` + Shiki for code block rendering
- Radix UI primitives

## Getting Started

### Prerequisites

- Node.js
- `pnpm` 10.33.0

### Install

```bash
pnpm install
```

### Run Locally

```bash
pnpm dev
```

Open `http://localhost:3000`.

## Available Commands

```bash
pnpm dev     # start the local development server
pnpm format  # format files, imports, and Tailwind classes
pnpm lint    # run type-aware lint checks
pnpm check   # verify formatting and linting
pnpm build   # production build
pnpm start   # run the production server
```

Notes:

- `pnpm check` runs `oxfmt --check` followed by oxlint.
- There is no separate test runner or standalone typecheck script in this repo.

## Project Structure

```text
src/
  app/
    layout.tsx          # global shell, metadata, analytics, background
    page.tsx            # tabbed homepage entrypoint
    blog/[slug]/page.tsx# statically generated blog post pages
    api/og/route.tsx    # Open Graph image generation
  blogs/                # local MDX blog content
  components/           # homepage sections, UI primitives, Magic UI pieces
  lib/
    mdx.tsx             # MDX loading and rendering pipeline
    utils.ts            # shared constants and helpers
```

## Content Authoring

Blog posts live in `src/blogs/*.mdx` and are loaded directly from the filesystem.

Each post needs frontmatter shaped like this:

```mdx
---
title: "Post title"
description: "Short summary"
date: "April 18, 2026"
---
```

Important details:

- blog ordering is based on the `date` field in frontmatter
- post pages are generated from the file slug
- `/blog` redirects to `/?tab=Blogs`
- the homepage blog tab is populated from `getAllBlogsMeta()` in `src/lib/mdx.tsx`

## Styling And Conventions

- use the `@/*` import alias for `src/*`
- use `cn()` from `src/lib/utils.ts` for class merging
- oxfmt enforces double quotes, import organization, and sorted Tailwind classes
- oxlint checks TypeScript, React, accessibility, imports, and Next.js usage
- shadcn-style aliases are configured for `@/components/ui` and `@/components/magicui`

## Environment Notes

- `getBaseUrl()` uses Vercel deployment URLs and the production domain for absolute metadata URLs
- bundle analysis is only enabled when `ANALYZE=true`
- Google Analytics is currently hardcoded in `src/components/gtag.tsx`

## Deployment

This app is structured for a standard Next.js deployment.

For a production build:

```bash
pnpm build
pnpm start
```

Vercel deployment URLs are detected automatically; production falls back to `prince.juguilon.com`.

## Contributing

1. Install dependencies with `pnpm install`.
2. Run `pnpm dev` while iterating.
3. Run `pnpm check` before submitting changes.
4. Run `pnpm build` for the closest full-project verification.
