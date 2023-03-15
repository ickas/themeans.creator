/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.manifold.xyz",
        pathname: "/image/upload/**",
      },
    ],
  },
};

module.exports = nextConfig;
