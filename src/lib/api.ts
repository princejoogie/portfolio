export const apiHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": "public, max-age=300, stale-while-revalidate=3600",
} as const;

export const jsonResponse = (data: unknown, init?: ResponseInit) =>
  Response.json(data, {
    ...init,
    headers: {
      ...apiHeaders,
      ...init?.headers,
    },
  });
