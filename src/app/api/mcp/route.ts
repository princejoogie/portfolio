import { createMcpHandler } from "mcp-handler";
import { z } from "zod";
import {
  getBlogPosts,
  getProfile,
  getProjects,
  getResume,
} from "@/lib/portfolio";

const readOnlyAnnotations = {
  destructiveHint: false,
  idempotentHint: true,
  openWorldHint: false,
  readOnlyHint: true,
};

const handler = createMcpHandler(
  (server) => {
    server.registerTool(
      "get_profile",
      {
        annotations: readOnlyAnnotations,
        description:
          "Get Prince Carlo Juguilon's professional profile and public links.",
        inputSchema: z.object({}),
        title: "Get Prince Juguilon Profile",
      },
      async () => ({
        content: [
          { type: "text", text: JSON.stringify(getProfile(), null, 2) },
        ],
      }),
    );

    server.registerTool(
      "get_resume",
      {
        annotations: readOnlyAnnotations,
        description:
          "Get Prince Carlo Juguilon's resume as structured data with a link to the current PDF.",
        inputSchema: z.object({}),
        title: "Get Prince Juguilon Resume",
      },
      async () => ({
        content: [{ type: "text", text: JSON.stringify(getResume(), null, 2) }],
      }),
    );

    server.registerTool(
      "list_projects",
      {
        annotations: readOnlyAnnotations,
        description:
          "List projects from Prince Carlo Juguilon's portfolio. Archived projects are omitted by default.",
        inputSchema: z.object({
          includeArchived: z
            .boolean()
            .default(false)
            .describe("Include historical and archived projects."),
        }),
        title: "List Portfolio Projects",
      },
      async ({ includeArchived }) => ({
        content: [
          {
            type: "text",
            text: JSON.stringify(getProjects(includeArchived), null, 2),
          },
        ],
      }),
    );

    server.registerTool(
      "list_blog_posts",
      {
        annotations: readOnlyAnnotations,
        description:
          "List Prince Carlo Juguilon's published engineering articles with dates and URLs.",
        inputSchema: z.object({}),
        title: "List Blog Posts",
      },
      async () => ({
        content: [
          {
            type: "text",
            text: JSON.stringify(await getBlogPosts(), null, 2),
          },
        ],
      }),
    );
  },
  {
    serverInfo: {
      name: "prince-juguilon-portfolio",
      version: "1.0.0",
    },
  },
);

export { handler as GET, handler as POST };
