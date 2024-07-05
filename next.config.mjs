/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    assetPrefix: process.env.NODE_ENV === "production" ? "/sidnb13.github.io/" : undefined,
};

export default nextConfig;
