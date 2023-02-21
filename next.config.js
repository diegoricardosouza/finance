/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({})
