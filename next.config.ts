import type { NextConfig } from "next";

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
};

export default nextConfig;
