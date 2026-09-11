import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only enable standalone output when explicitly requested (e.g., self-hosted Docker),
  // avoiding conflicts with Vercel's native serverless deployment pipeline.
  output: process.env.OUTPUT_STANDALONE === "true" ? "standalone" : undefined,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

