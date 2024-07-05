/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
};
module.exports = {
    basePath: '/sidnb13.github.io',
};

export default nextConfig;
