/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "localhost" }, 
      { hostname: "randomuser.me" },
      { 
        protocol: 'https',
        hostname: 'avaa.io',
        pathname: '/hs-fs/hubfs/**',
      }
    ],
  },
};

export default nextConfig;
