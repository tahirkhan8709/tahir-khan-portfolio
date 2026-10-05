import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Allow Unsplash images
      },
      {
        protocol: 'https',
        hostname: 'github.com', // Allow GitHub hosted images
      },
      // Add any other domains where your project images are stored
    ],
  },
};

export default nextConfig;