/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_CONTENTFUL_SPACE_ID: '5gkfl4mk2m59',
    REACT_APP_ACCESS_TOKEN: 'p1CQVS_MXM1WczNEJYonf-DMr32DbZCIuMtEHk_vY-E',
  },
  // This is to can show images. Put the contentful url
  // images: {
  //  domains: ['images.ctfassets.net'],
  // domains: ['example.com'],
  // },
};
module.exports = nextConfig;
