import { getBaseUrl } from "@/lib/utils";

export const GET = () => {
  const baseUrl = getBaseUrl();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:sf="http://schema.org/schemas/schemafeed/0.1">
  <url>
    <loc>${baseUrl}/feeds/schema</loc>
    <lastmod>2026-08-24</lastmod>
    <sf:contentType>structuredData/schema.org</sf:contentType>
  </url>
</urlset>`;

  return new Response(xml, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
