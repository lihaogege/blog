/** @type {import('next').NextConfig} */
const withLess = require("next-with-less");
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const path = require('path')
module.exports = (phase) => {
  // if(phase === PHASE_DEVELOPMENT_SERVER){
  //   return  withLess({
  //     reactStrictMode: true,
  //     swcMinify: true,
  //     env:{
  //       url:"dev.baidu.com"
  //     }
  //   })
  // }
  return withLess({
    images: {
      domains: ['medtion-image.medtion.com','www.cdcxhl.com'],
    },
    reactStrictMode: false,
    swcMinify: false,
    async rewrites() {
      return [
        {source: '/wapi/:path*', destination: `https://dev.medtion.com/wapi/:path*`},
      ]
    },
    env: {
      APP_ENV: process.env.APP_ENV
    }
  })

}