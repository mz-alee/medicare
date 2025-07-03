/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "cc42-110-39-164-238.ngrok-free.app",
        pathname: "/media/*",
      },
    ],
  },
};

export default nextConfig;
