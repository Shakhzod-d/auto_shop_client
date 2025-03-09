import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "uz", "ru"],
    defaultLocale: "uz",
  },
  images: {
    domains: ["autoshop.fra1.cdn.digitaloceanspaces.com"],
  },
};

export default nextConfig;
