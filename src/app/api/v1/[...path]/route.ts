import { jsonResponse } from "@/lib/api";

type RouteContext = {
  params: Promise<{ path: string[] }>;
};

const notFound = async (_request: Request, context: RouteContext) => {
  const { path } = await context.params;

  return jsonResponse(
    {
      error: {
        code: "RESOURCE_NOT_FOUND",
        message: `The API resource /api/v1/${path.join("/")} does not exist.`,
        resolution:
          "Fetch /api/v1 for the resource index or /openapi.json for the complete API contract.",
      },
    },
    { status: 404 },
  );
};

export {
  notFound as DELETE,
  notFound as GET,
  notFound as OPTIONS,
  notFound as PATCH,
  notFound as POST,
  notFound as PUT,
};
