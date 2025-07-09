/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "aa7b-72-255-28-104.ngrok-free.app",
        pathname: "/media/*",
      },
    ],
  },
};

export default nextConfig;
