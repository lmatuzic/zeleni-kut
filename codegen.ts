import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clc6b0m3n18b201uldropgzhq/master`,
	documents: ['app/**/*.{ts, tsx, js, jsx}'],
	ignoreNoDocuments: true,
	generates: {
		'./app/lib/graphql-codegen/': {
			preset: 'client',
			plugins: [],
		},
	},
};

export default config;
