// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove the webpack config - it's not needed with App Router + TypeScript
  // The App Router automatically handles the @ alias through tsconfig.json
  
  // Add this to fix the lockfile warning
  outputFileTracingRoot: process.cwd(),
  
  // Optional: Enable or configure Turbopack if you want
  experimental: {
    // turbo: {
    //   // Turbopack configuration if needed
    // }
  }
};

export default nextConfig;