export const apiHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": "public, max-age=300, stale-while-revalidate=3600",
} as const;

export const jsonResponse = (data: unknown, init?: ResponseInit) => {
  const headers = new Headers(apiHeaders);

  new Headers(init?.headers).forEach((value, key) => {
    headers.set(key, value);
  });

  return Response.json(data, {
    ...init,
    headers,
  });
};
