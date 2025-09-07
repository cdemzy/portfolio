/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_EMAIL_TOKEN: process.env.EMAIL_TOKEN,
    },
};

export default nextConfig;
