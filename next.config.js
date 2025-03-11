/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static optimization for API routes
  experimental: {
    serverComponentsExternalPackages: ['mongoose']
  },
  // Add output configuration
  output: 'standalone',
  // Disable special character handling in routes
  trailingSlash: false,
  // Disable automatic static optimization
  reactStrictMode: true,
  swcMinify: true,
  // Add any other configuration options here
};

module.exports = nextConfig; 