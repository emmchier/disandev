/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_CONTENTFUL_SPACE_ID: '5gkfl4mk2m59',
    REACT_APP_ACCESS_TOKEN: 'p1CQVS_MXM1WczNEJYonf-DMr32DbZCIuMtEHk_vY-E',
    REACT_APP_URL_BASE: 'https://disandev.com',
    REACT_APP_GOOGLE_TAG_MANAGER: 'GTM-TWKQ6DQ',
    EMAILJS_SERVICE_ID: 'service_px558mz',
    EMAILJS_TEMPLATE_ID: 'template_r0xi4q4',
    EMAILJS_PUBLIC_KEY: 'XAlqTNhYdjpbXOcnN',
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
};

module.exports = nextConfig;
