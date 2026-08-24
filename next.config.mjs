import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Link",
            value:
              '</sitemap.xml>; rel="sitemap"; type="application/xml", </index.md>; rel="alternate"; type="text/markdown", </openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json", </.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json", </.well-known/agent-skills/index.json>; rel="service-desc"; type="application/json", </.well-known/mcp/server-card.json>; rel="service-desc"; type="application/json", </.well-known/mcp/docs-server-card.json>; rel="service-desc"; type="application/json"',
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.shields.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "nodei.co",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.buymeacoffee.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "contrib.rocks",
        port: "",
      },
    ],
  },
};

export default withBundleAnalyzer(nextConfig);
