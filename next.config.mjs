/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'fc3e-110-39-164-238.ngrok-free.app',
        pathname: '/media/**',
      },
    ],
  },
};

export default nextConfig;
