import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cloud.corferias.co" },
    ],
  },
};

export default nextConfig;
