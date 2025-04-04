/** @type {import('next').NextConfig} */

module.exports = {
	images: {
		minimumCacheTTL: 2678400, // 31 days
		// formats: ['image/jpg'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'eu-central-1-shared-euc1-02.graphassets.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};
