/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "4e62-119-154-198-82.ngrok-free.app",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
