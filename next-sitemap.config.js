/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://hoang.run",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/sitemap.xml"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/post/[slug]", "/tag/[tag]"],
      },
    ],
    additionalSitemaps: ["https://hoang.run/sitemap.xml"],
  },
};
