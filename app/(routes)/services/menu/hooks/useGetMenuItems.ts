'use client';

import { MenuItemsDocument } from '@/app/lib/graphql-codegen/graphql';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';

export default function useGetMenuItems() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['menuItems'],
		queryFn: async () => request(`${process.env.HYGRAPH_CONTENT_API}`, MenuItemsDocument),
	});

	return { data, isLoading, error };
}
