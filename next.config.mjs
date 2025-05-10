import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ]
  },
  images: {
    remotePatterns: [
      // Allowed Sanity Image CDN
      {
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  output: 'standalone',
}

export default withNextIntl(nextConfig)
