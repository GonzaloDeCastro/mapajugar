import type { NextConfig } from "next";

import { getBasePath } from "./src/lib/routing/base-path";

const basePath = getBasePath();

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  devIndicators: false,
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
