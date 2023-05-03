/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: {
      // loader: 'custom',
      // loaderFile: './Utils/CustomImageLoader.ts',
      // deviceSizes: [640, 768, 1024],
      domains: ['res.cloudinary.com']
    },
    appDir: true,
  },
}

module.exports = nextConfig
