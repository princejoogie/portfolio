import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getBaseUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Prince Juguilon Developer Resources",
  description:
    "API documentation, OpenAPI specification, and MCP server for Prince Juguilon's public portfolio data.",
};

const endpoints = [
  ["/api/v1/profile", "Name, role, biography, and public links."],
  [
    "/api/v1/projects",
    "Active portfolio projects. Use ?status=all for history.",
  ],
  ["/api/v1/blogs", "Published engineering articles and canonical URLs."],
  ["/api/v1/resume", "Structured resume data and the current PDF URL."],
] as const;

export default function DevelopersPage() {
  const baseUrl = getBaseUrl();
  const mcpConfig = JSON.stringify(
    {
      mcpServers: {
        "prince-portfolio": {
          url: `${baseUrl}/api/mcp`,
        },
      },
    },
    null,
    2,
  );

  return (
    <article>
      <h2 className="text-2xl">Prince Juguilon Developer Resources</h2>
      <p className="mt-2">
        Public, read-only access to this portfolio&apos;s profile, resume,
        projects, and engineering articles through JSON or Model Context
        Protocol.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button asChild variant="outline">
          <Link href="/openapi.json">OpenAPI specification</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/api/mcp">MCP endpoint</Link>
        </Button>
      </div>

      <h3 className="mt-10 text-xl">Quickstart</h3>
      <p className="mt-2 text-muted-foreground text-sm">
        No account, API key, or OAuth flow is required.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-md border border-border bg-muted p-3 text-sm">
        <code>{`curl ${baseUrl}/api/v1/profile`}</code>
      </pre>

      <h3 className="mt-10 text-xl">REST endpoints</h3>
      <ul className="mt-3 ml-6 list-disc">
        {endpoints.map(([path, description]) => (
          <li className="my-3 pl-1" key={path}>
            <code className="rounded bg-muted p-1 text-foreground">{path}</code>
            <span className="text-muted-foreground"> {description}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-muted-foreground text-sm">
        See the machine-readable{" "}
        <Link className="underline" href="/openapi.json">
          OpenAPI 3.1 specification
        </Link>{" "}
        for complete schemas and examples.
      </p>

      <h3 className="mt-10 text-xl">Model Context Protocol</h3>
      <p className="mt-2">
        Connect an MCP client to the Streamable HTTP endpoint. It exposes
        <code className="mx-1 rounded bg-muted p-1 text-foreground">
          get_profile
        </code>
        ,
        <code className="mx-1 rounded bg-muted p-1 text-foreground">
          get_resume
        </code>
        ,
        <code className="mx-1 rounded bg-muted p-1 text-foreground">
          list_projects
        </code>
        , and
        <code className="mx-1 rounded bg-muted p-1 text-foreground">
          list_blog_posts
        </code>
        .
      </p>
      <pre className="mt-3 overflow-x-auto rounded-md border border-border bg-muted p-3 text-sm">
        <code>{mcpConfig}</code>
      </pre>

      <h3 className="mt-10 text-xl">Authentication</h3>
      <p className="mt-2">
        API keys and OAuth 2.0 are not required. Every REST operation and MCP
        tool is public and read-only, with no access to accounts or private
        data. See{" "}
        <Link className="underline" href="/auth.md">
          auth.md
        </Link>{" "}
        for the machine-readable authentication policy.
      </p>

      <h3 className="mt-10 text-xl">Sandbox</h3>
      <p className="mt-2">
        Use the production endpoint for integration testing. The API has no
        write operations, and the MCP tools are marked read-only and
        non-destructive, so requests cannot change portfolio data.
      </p>

      <h3 className="mt-10 text-xl">Versioning</h3>
      <p className="mt-2">
        The REST contract is versioned under
        <code className="mx-1 rounded bg-muted p-1 text-foreground">
          /api/v1
        </code>
        . Breaking changes will use a new path prefix. The OpenAPI document and
        MCP connection URL remain stable discovery endpoints.
      </p>
    </article>
  );
}
