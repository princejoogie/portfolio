import bundleAnalyzer from "@next/bundle-analyzer";
import nextMDX from "@next/mdx";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    mdxRs: true,
    typedRoutes: true,
  },
};

export default withBundleAnalyzer(withMDX(nextConfig));
