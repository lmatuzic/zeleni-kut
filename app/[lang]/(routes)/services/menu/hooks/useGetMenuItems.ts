'use client';

import { MenuItemsDocument } from '@/app/[lang]/lib/graphql-codegen/graphql';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';

export default function useGetMenuItems() {
	const { data, isLoading } = useQuery({
		queryKey: ['menuItems'],
		queryFn: async () => request(`${process.env.HYGRAPH_CONTENT_API}`, MenuItemsDocument),
	});

	const appetizers = data?.menuItems.filter(
		(menuItem) => menuItem.menuCategory?.name === 'Appetizer'
	);

	const mainCourses = data?.menuItems.filter(
		(menuItem) => menuItem.menuCategory?.name === 'Main courses'
	);

	return { data, appetizers, mainCourses, isLoading };
}
