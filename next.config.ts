import type { NextConfig } from "next";

/**
 * GitHub Pages (sitio de proyecto): definir BASE_PATH=/nombre-del-repo al buildear.
 * Sitio de usuario (username.github.io sin subruta): dejar BASE_PATH vacío.
 */
/** Sin "/" inicial (evita que Git Bash en Windows convierta `/repo`). */
let rawBase = process.env.BASE_PATH?.trim().replace(/\/$/, "") ?? "";
if (rawBase.startsWith("/")) rawBase = rawBase.slice(1);
const basePath = rawBase && rawBase !== "." ? `/${rawBase}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
