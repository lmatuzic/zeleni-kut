'use client';

import Gallery from '@/app/[lang]/components/shared/Gallery';
import LoadingSpinner from '@/app/[lang]/components/shared/LoadingSpinner';
import useGQLQuery from '@/app/[lang]/hooks/useGQLQuery';
import {
	RestaurantGalleryDocument,
	RestaurantGalleryQuery,
} from '@/app/lib/graphql-codegen/graphql';

export default function FetchedImageGallery() {
	const { data, isLoading } = useGQLQuery<RestaurantGalleryQuery>(
		['restaurantGallery'],
		RestaurantGalleryDocument
	);

	return (
		<>{isLoading ? <LoadingSpinner /> : <Gallery images={data?.restaurantGalleries[0].images} />}</>
	);
}
