/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '6a9c-119-154-199-121.ngrok-free.app',
        pathname: '/media/**',
      },
    ],
  },
};

export default nextConfig;
