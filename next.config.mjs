/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['knex'],
    esmExternals: 'loose',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's.gravatar.com',
      },
    ],
  },
};

export default nextConfig;
