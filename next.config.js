/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA()
