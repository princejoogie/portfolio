# Portfolio

Personal portfolio site for [prince.juguilon.com](https://prince.juguilon.com), built with Next.js 16, React 19, and Tailwind CSS.

## Overview

This project is a single-app Next.js portfolio with:

- dedicated About, Blogs, Setup, and Contact routes with prefetched client-side navigation
- statically generated MDX blog posts from local content
- dynamic Open Graph image generation via `@vercel/og`
- a public OpenAPI-described REST API plus portfolio and documentation MCP servers
- agent discovery through `llms.txt`, markdown fallbacks, an Agent Skills index, an RFC 9727 API catalog, and NLWeb Schema Feeds
- server-rendered Person, ProfilePage, Article, and breadcrumb structured data
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
    page.tsx            # redirects browser traffic to /about
    about/              # profile and experience
    blog/               # article listing and static post pages
    setup/              # development environment and desk setup
    contact/            # contact and booking actions
    blog/[slug]/page.tsx# statically generated blog post pages
    api/v1/             # public read-only portfolio REST API
    api/mcp/            # portfolio and developer-documentation MCP servers
    api/og/route.tsx    # Open Graph image generation
  proxy.ts              # agent mode and markdown content negotiation
  blogs/                # local MDX blog content
  components/           # homepage sections, UI primitives, Magic UI pieces
  lib/
    mdx.tsx             # MDX loading and rendering pipeline
    structured-data.ts  # JSON-LD and schema-feed records
    utils.ts            # shared constants and helpers
public/
  llms.txt              # canonical agent index
  openapi.json          # OpenAPI 3.1 contract
  .well-known/          # API, MCP, and Agent Skills discovery
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
- `/blog` renders the dedicated article listing
- the homepage blog tab is populated from `getAllBlogsMeta()` in `src/lib/mdx.tsx`

## Styling And Conventions

- use the `@/*` import alias for `src/*`
- use `cn()` from `src/lib/utils.ts` for class merging
- oxfmt enforces double quotes, import organization, and sorted Tailwind classes
- oxlint checks TypeScript, React, accessibility, imports, and Next.js usage
- shadcn-style aliases are configured for `@/components/ui` and `@/components/magicui`

## Environment Notes

- `getBaseUrl()` uses localhost in development and always uses `https://prince.juguilon.com` for production and preview builds
- bundle analysis is only enabled when `ANALYZE=true`
- Google Analytics is currently hardcoded in `src/components/gtag.tsx`

## Deployment

This app is structured for a standard Next.js deployment.

For a production build:

```bash
pnpm build
pnpm start
```

Production and preview deployments publish canonical URLs for `https://prince.juguilon.com`; Vercel deployment domains are never exposed as canonical API, metadata, or discovery URLs.

## Contributing

1. Install dependencies with `pnpm install`.
2. Run `pnpm dev` while iterating.
3. Run `pnpm check` before submitting changes.
4. Run `pnpm build` for the closest full-project verification.
