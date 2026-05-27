import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ARES_ROVERS_UNB_WEBSITE",
  assetPrefix: "/ARES_ROVERS_UNB_WEBSITE/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
