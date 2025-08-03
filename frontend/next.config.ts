import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'kidobebe.com',
                port: '',
                pathname: '/cdn/shop/**',
            },
        ],
    },
}

export default nextConfig
