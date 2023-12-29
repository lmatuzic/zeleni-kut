'use client';

import { GalleryImagesDocument } from '@/app/lib/graphql-codegen/graphql';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';

export default function useGetGalleryImages() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['galleryImages'],
		queryFn: async () => request(`${process.env.HYGRAPH_CONTENT_API}`, GalleryImagesDocument),
	});

	return { data, isLoading, error };
}
