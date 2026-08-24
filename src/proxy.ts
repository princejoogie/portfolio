import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const destination = new URL(request.url);
  const wantsAgentMode = request.nextUrl.searchParams.get("mode") === "agent";
  const wantsMarkdown = request.headers
    .get("accept")
    ?.toLowerCase()
    .includes("text/markdown");

  if (wantsAgentMode) {
    destination.pathname = "/api/v1";
    destination.search = "";
  } else if (wantsMarkdown) {
    destination.pathname = "/index.md";
    destination.search = "";
  } else {
    const response = NextResponse.next();
    response.headers.set("Vary", "Accept, Accept-Encoding");
    return response;
  }

  const response = NextResponse.rewrite(destination);
  response.headers.set("Vary", "Accept, Accept-Encoding");

  return response;
}

export const config = {
  matcher: "/",
};
