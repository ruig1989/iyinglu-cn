/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com', 'flagcdn.com'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'flagcdn.com' },
    ],
  },
  eslint: { ignoreDuringBuilds: true },
  output: "standalone",   // 为 Cloudflare Pages 适配
};
module.exports = nextConfig;