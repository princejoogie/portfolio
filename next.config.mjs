import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
      },
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
