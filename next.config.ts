import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "uz", "ru"],
    defaultLocale: "uz", 
  },
};

export default nextConfig;
