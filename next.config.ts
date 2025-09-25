import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disabled static export for Web3 functionality
  // output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true
  },
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  // Specify the correct root directory for Turbo
  turbopack: {
    root: __dirname
  }
};

// Disable PWA for now to avoid build issues during static export
export default nextConfig;
