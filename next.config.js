/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d3lqz0a4bldqgf.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "i.seadn.io",
      },
      {
        protocol: "https",
        hostname: "assets.manifold.xyz",
        pathname: "/image/upload/**",
      },
    ],
  },
};

module.exports = nextConfig;
