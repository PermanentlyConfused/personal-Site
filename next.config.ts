import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/page_one",
        destination: "/ScavengerHunt/pages/page_one",
        permanent: true, // Use 308 status code (permanent)
      },
    ];
  },
};

export default nextConfig;
