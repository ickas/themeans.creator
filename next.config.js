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
        hostname: "d1updk8hq321rl.cloudfront.net",
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
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/meaned-memes",
        destination: "/season1means",
        permanent: true,
      },
      {
        source: "/szn2mints",
        destination: "/season2-5means",
        permanent: true,
      },
      {
        source: "/minting-now",
        destination: "/season2-5means",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
