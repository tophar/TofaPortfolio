import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only enable standalone output when explicitly requested (e.g., self-hosted Docker),
  // avoiding conflicts with Vercel's native serverless deployment pipeline.
  output: process.env.OUTPUT_STANDALONE === "true" ? "standalone" : undefined,
};

export default nextConfig;
