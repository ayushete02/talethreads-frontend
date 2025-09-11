import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Re-enabling static export
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    optimizePackageImports: ['lucide-react']
  }
};

// Disable PWA for now to avoid build issues during static export
export default nextConfig;
