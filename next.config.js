/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static optimization for API routes
  experimental: {
    serverComponentsExternalPackages: ['mongoose']
  },
  // Add any other configuration options here
};

module.exports = nextConfig; 