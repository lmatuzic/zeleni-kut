'use client';

import LoadingSpinner from '@/app/[lang]/components/shared/LoadingSpinner';
import Gallery from '@/app/[lang]/components/shared/Gallery';
import useGQLQuery from '@/app/[lang]/hooks/useGQLQuery';
import { GalleryDocument, GalleryQuery } from '@/app/lib/graphql-codegen/graphql';

export default function FetchedImageGallery() {
	const { data, isLoading } = useGQLQuery<GalleryQuery>(['gallery'], GalleryDocument);

	return <>{isLoading ? <LoadingSpinner /> : <Gallery images={data?.galleries[0].images} />}</>;
}
