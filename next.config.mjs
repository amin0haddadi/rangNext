/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.dog.ceo",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "fakestoreapi.com",
            },
            {
                protocol: "https",
                hostname: "cdn.khanoumi.com",
            },{
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },
};;

export default nextConfig;
