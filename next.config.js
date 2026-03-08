/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable static optimization
  output: 'standalone',
  // Compress responses
  compress: true,
  // Optimize fonts
  optimizeFonts: true,
  // Performance optimizations
  swcMinify: true,
}

module.exports = nextConfig
