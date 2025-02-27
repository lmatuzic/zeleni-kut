/** @type {import('next').NextConfig} */

module.exports = {
	images: {
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
