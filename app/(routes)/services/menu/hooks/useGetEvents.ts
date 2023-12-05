'use client';

import { EventsDocument } from '@/app/lib/graphql-codegen/graphql';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';

export default function useGetEvents() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['menuCategories'],
		queryFn: async () => request(`${process.env.HYGRAPH_CONTENT_API}`, EventsDocument),
	});

	return { data, isLoading, error };
}
