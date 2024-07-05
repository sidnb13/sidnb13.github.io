/** @type {import('next').NextConfig} */
const nextConfig = {
    output: process.env.NODE_ENV === "production" ? "export" : undefined,  // <=== enables static exports
    reactStrictMode: true,
};

export default nextConfig;
