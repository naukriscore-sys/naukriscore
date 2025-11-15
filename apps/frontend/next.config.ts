import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "img.naukimg.com",
      },
      {
        hostname: "plus.unsplash.com",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "images.pexels.com",
      },
      {
        hostname: "flagcdn.com",
      },
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
  allowedDevOrigins: ["https://naukriscore.com"],
};

export default nextConfig;
