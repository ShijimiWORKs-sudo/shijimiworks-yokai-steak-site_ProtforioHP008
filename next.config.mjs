/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/shijimiworks-yokai-steak-site_ProtforioHP008",
  assetPrefix: "/shijimiworks-yokai-steak-site_ProtforioHP008/",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;