import { getBaseUrl } from "@/lib/utils";

const getHeaders = (baseUrl: string) => ({
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
  "Content-Type":
    'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"',
  Link: [
    `<${baseUrl}/api/v1>; rel="item"`,
    `<${baseUrl}/api/mcp>; rel="item"`,
    `<${baseUrl}/api/mcp/docs>; rel="item"`,
  ].join(", "),
});

export const GET = () => {
  const baseUrl = getBaseUrl();

  return Response.json(
    {
      linkset: [
        {
          anchor: `${baseUrl}/.well-known/api-catalog`,
          item: [
            { href: `${baseUrl}/api/v1` },
            { href: `${baseUrl}/api/mcp` },
            { href: `${baseUrl}/api/mcp/docs` },
          ],
        },
        {
          anchor: `${baseUrl}/api/v1`,
          "service-desc": [
            {
              href: `${baseUrl}/openapi.json`,
              type: "application/vnd.oai.openapi+json",
            },
          ],
          "service-doc": [
            { href: `${baseUrl}/developers`, type: "text/html" },
            { href: `${baseUrl}/developers.md`, type: "text/markdown" },
          ],
          "service-meta": [
            { href: `${baseUrl}/auth.md`, type: "text/markdown" },
          ],
        },
        {
          anchor: `${baseUrl}/api/mcp`,
          "service-desc": [
            {
              href: `${baseUrl}/.well-known/mcp/server-card.json`,
              type: "application/json",
            },
          ],
          "service-doc": [{ href: `${baseUrl}/developers`, type: "text/html" }],
        },
        {
          anchor: `${baseUrl}/api/mcp/docs`,
          "service-desc": [
            {
              href: `${baseUrl}/.well-known/mcp/docs-server-card.json`,
              type: "application/json",
            },
          ],
          "service-doc": [
            { href: `${baseUrl}/developers.md`, type: "text/markdown" },
          ],
        },
      ],
    },
    { headers: getHeaders(baseUrl) },
  );
};

export const HEAD = () => {
  const baseUrl = getBaseUrl();

  return new Response(null, { headers: getHeaders(baseUrl) });
};
