/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ['images-assets.nasa.gov'],
    deviceSizes: [320,420,768,1024,1200],
    path: "/_next/image",
    loader: "default",
  },
};
module.exports = nextConfig


