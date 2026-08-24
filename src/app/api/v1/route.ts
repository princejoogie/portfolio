import { jsonResponse } from "@/lib/api";
import { getBaseUrl } from "@/lib/utils";

export const GET = () => {
  const baseUrl = getBaseUrl();

  return jsonResponse({
    name: "Prince Juguilon Portfolio API",
    version: "1.0.0",
    authentication: "none",
    capabilities: ["profile", "resume", "projects", "articles"],
    documentation: new URL("/developers", baseUrl).toString(),
    openapi: new URL("/openapi.json", baseUrl).toString(),
    mcp: {
      portfolio: new URL("/api/mcp", baseUrl).toString(),
      documentation: new URL("/api/mcp/docs", baseUrl).toString(),
    },
    discovery: {
      agentSkills: new URL(
        "/.well-known/agent-skills/index.json",
        baseUrl,
      ).toString(),
      apiCatalog: new URL("/.well-known/api-catalog", baseUrl).toString(),
      llms: new URL("/llms.txt", baseUrl).toString(),
      markdown: new URL("/index.md", baseUrl).toString(),
    },
    resources: {
      blogs: new URL("/api/v1/blogs", baseUrl).toString(),
      profile: new URL("/api/v1/profile", baseUrl).toString(),
      projects: new URL("/api/v1/projects", baseUrl).toString(),
      resume: new URL("/api/v1/resume", baseUrl).toString(),
    },
  });
};
