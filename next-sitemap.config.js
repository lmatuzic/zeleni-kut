/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.NEXT_PUBLIC_SITE_URL_COM || NEXT_PUBLIC_SITE_URL_HR,
	generateRobotsTxt: true,
};
