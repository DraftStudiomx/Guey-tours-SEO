/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'gueytours.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/studio',
        destination: '/studio/desk',
        permanent: false,
      },
      {
        source: '/inicio',
        destination: '/',
        permanent: true,
      },
    ]
  },
};
export default nextConfig;