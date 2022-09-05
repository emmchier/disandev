/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.REACT_APP_URL_BASE,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
