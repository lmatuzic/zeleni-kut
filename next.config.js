/** @type {import('next').NextConfig} */

module.exports = {
	env: {
		HYGRAPH_CONTENT_API:
			'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clc6b0m3n18b201uldropgzhq/master',
		RESEND_API_KEY: 're_StLNfNeG_GLRGZ2mcomfrNWmcsrVtv2SB',
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'media.graphassets.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};
