import { QueryKey, useQuery } from '@tanstack/react-query';
import { DocumentNode } from 'graphql';
import request, { Variables } from 'graphql-request';

export default function useGQLQuery<QueryResultType>(
	queryKey: QueryKey,
	queryDocument: DocumentNode,
	variables?: Variables
) {
	const { data, isLoading, error } = useQuery<QueryResultType>({
		queryKey: queryKey,
		queryFn: async () =>
			request(`${process.env.NEXT_PUBLIC_HYGRAPH_CONTENT_API}`, queryDocument, variables),
	});

	return { data, isLoading, error };
}
