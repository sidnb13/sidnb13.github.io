/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
};
module.exports = {
    basePath: '/sidbaskaran.com',
};

export default nextConfig;
