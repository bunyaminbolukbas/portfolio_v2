const createMDX = require('@next/mdx');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

// Artikelen in content/inzichten/*.mdx worden als modules geïmporteerd (zie content/inzichten/index.ts).
const withMDX = createMDX({});

module.exports = withMDX(nextConfig);
