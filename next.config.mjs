/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['knex'],
    esmExternals: 'loose',
  },
};

export default nextConfig;
