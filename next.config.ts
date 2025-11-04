/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This will allow your build to succeed even if there are ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;