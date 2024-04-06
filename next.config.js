/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "themeanscreator.b-cdn.net",
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
