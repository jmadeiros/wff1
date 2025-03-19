import type { NextConfig } from "next";

// For Firebase static hosting, we need to disable API routes as they won't work in a static export
const nextConfig: NextConfig = {
  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
    unoptimized: true,
  },
  // Set server configuration to use port 3002
  serverRuntimeConfig: {
    port: 3002,
  },
  output: 'export',
  // Exclude API routes from the build as they won't work with static export
  distDir: 'out',
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
