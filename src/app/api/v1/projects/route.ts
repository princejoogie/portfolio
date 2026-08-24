import { jsonResponse } from "@/lib/api";
import { getProjects } from "@/lib/portfolio";

export const GET = (request: Request) => {
  const status = new URL(request.url).searchParams.get("status") ?? "active";

  if (status !== "active" && status !== "all") {
    return jsonResponse(
      {
        error: {
          code: "INVALID_STATUS",
          message: 'The status parameter must be either "active" or "all".',
          resolution: "Remove the parameter or use ?status=all.",
        },
      },
      { status: 400 },
    );
  }

  return jsonResponse(getProjects(status === "all"));
};
