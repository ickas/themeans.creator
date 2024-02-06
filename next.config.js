/** @type {import('next').NextConfig} */
const nextConfig = {
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
        hostname: "arweave.net",
      },
      {
        protocol: "https",
        hostname: "assets.manifold.xyz",
        pathname: "/image/upload/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/szn2mints",
        destination: "/minting-now",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
