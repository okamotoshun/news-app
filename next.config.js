/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
          // port: '',
          // pathname: '/account123/**',
        },
      ],
    },
  },
}

module.exports = nextConfig
