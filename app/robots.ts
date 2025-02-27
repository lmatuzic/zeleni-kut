import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: [
			'https://zeleni-kut.com/sitemap.xml',
			'https://www.zeleni-kut-puskaric.hr/sitemap.xml',
		],
	};
}
