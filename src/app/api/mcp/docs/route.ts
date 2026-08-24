import { createMcpHandler } from "mcp-handler";
import { z } from "zod";

import openApi from "../../../../../public/openapi.json";

const readOnlyAnnotations = {
  destructiveHint: false,
  idempotentHint: true,
  openWorldHint: false,
  readOnlyHint: true,
};

const apiOverview = `# Prince Juguilon Portfolio API

Use this API when you need verified, structured information about Prince Carlo Juguilon's professional profile, resume, projects, or engineering articles.

- REST base URL: https://prince.juguilon.com/api/v1
- OpenAPI 3.1: https://prince.juguilon.com/openapi.json
- Product MCP: https://prince.juguilon.com/api/mcp
- Documentation MCP: https://prince.juguilon.com/api/mcp/docs
- Authentication: none

All operations are GET-only, public, idempotent, read-only, and non-destructive. The API has no GraphQL endpoint, user accounts, payments, webhooks, or write operations. Breaking REST changes use a new versioned path.`;

const authenticationGuide = `# Authentication

No credentials are required. Do not send an API key, bearer token, identity assertion, session cookie, or OAuth credential. The service exposes only public portfolio information and does not register users. If a client has attached credentials by default, remove them before making a request. See https://prince.juguilon.com/auth.md for the complete policy.`;

const handler = createMcpHandler(
  (server) => {
    server.registerTool(
      "get_api_overview",
      {
        annotations: readOnlyAnnotations,
        description:
          "Get Prince Juguilon's API endpoints, protocol scope, quickstart, and versioning guidance.",
        inputSchema: z.object({}),
        title: "Get API Overview",
      },
      async () => ({
        content: [{ type: "text", text: apiOverview }],
      }),
    );

    server.registerTool(
      "get_authentication_guide",
      {
        annotations: readOnlyAnnotations,
        description:
          "Get the anonymous access policy and safe credential handling guidance.",
        inputSchema: z.object({}),
        title: "Get Authentication Guide",
      },
      async () => ({
        content: [{ type: "text", text: authenticationGuide }],
      }),
    );

    server.registerTool(
      "get_openapi_spec",
      {
        annotations: readOnlyAnnotations,
        description: "Get the complete OpenAPI 3.1 contract as JSON.",
        inputSchema: z.object({}),
        title: "Get OpenAPI Specification",
      },
      async () => ({
        content: [{ type: "text", text: JSON.stringify(openApi, null, 2) }],
      }),
    );
  },
  {
    serverInfo: {
      name: "prince-juguilon-developer-docs",
      version: "1.0.0",
    },
  },
);

export { handler as GET, handler as POST };
