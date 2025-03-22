import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    domains: ["autoshop.fra1.cdn.digitaloceanspaces.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "autoshop.fra1.cdn.digitaloceanspaces.com",
      },
    ],
  },
};

export default nextConfig;
