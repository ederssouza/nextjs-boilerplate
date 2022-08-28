/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

const baseConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = isProd ? withPWA(baseConfig) : baseConfig

module.exports = nextConfig
