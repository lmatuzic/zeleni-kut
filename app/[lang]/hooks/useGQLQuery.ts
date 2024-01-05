import { Locale } from '@/i18.config';
import { QueryKey, useQuery } from '@tanstack/react-query';
import { DocumentNode } from 'graphql';
import request from 'graphql-request';

export default function useGQLQuery<QueryResultType>(
	queryKey: QueryKey,
	queryDocument: DocumentNode,
	locale?: Locale,
	id?: string
) {
	const { data, isLoading, error } = useQuery<QueryResultType>({
		queryKey: queryKey,
		queryFn: async () =>
			request(`${process.env.NEXT_PUBLIC_HYGRAPH_CONTENT_API}`, queryDocument, {
				locales: [locale],
				id: id,
			}),
	});

	return { data, isLoading, error };
}
