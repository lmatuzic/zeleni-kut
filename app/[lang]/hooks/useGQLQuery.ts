import { Locale } from '@/i18.config';
import { QueryKey, useQuery } from '@tanstack/react-query';
import { DocumentNode } from 'graphql';
import request from 'graphql-request';

export default function useGQLQuery<QueryResultType>(
	queryKey: QueryKey,
	queryDocument: DocumentNode,
	locale?: Locale
) {
	const { data, isLoading, error } = useQuery<QueryResultType>({
		queryKey: queryKey,
		queryFn: async () =>
			request(`${process.env.HYGRAPH_CONTENT_API}`, queryDocument, { locales: [locale] }),
	});

	return { data, isLoading, error };
}
