// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

const settings = {
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: !isProd
  }
}

module.exports = isProd ? withPWA(settings) : settings
