import { jsonResponse } from "@/lib/api";
import { getBaseUrl } from "@/lib/utils";

export const GET = () => {
  const baseUrl = getBaseUrl();

  return jsonResponse({
    name: "Prince Juguilon Portfolio API",
    version: "1.0.0",
    authentication: "none",
    documentation: new URL("/developers", baseUrl).toString(),
    openapi: new URL("/openapi.json", baseUrl).toString(),
    resources: {
      blogs: new URL("/api/v1/blogs", baseUrl).toString(),
      profile: new URL("/api/v1/profile", baseUrl).toString(),
      projects: new URL("/api/v1/projects", baseUrl).toString(),
      resume: new URL("/api/v1/resume", baseUrl).toString(),
    },
  });
};
