'use client';

import LoadingSpinner from '@/app/[lang]/(ui)/components/shared/LoadingSpinner';
import Gallery from '@/app/[lang]/components/Gallery';
import useGQLQuery from '@/app/[lang]/hooks/useGQLQuery';
import { GalleryDocument, GalleryQuery } from '@/app/lib/graphql-codegen/graphql';

export default function FetchedImageGallery() {
	const { data, isLoading } = useGQLQuery<GalleryQuery>(['galleries'], GalleryDocument);

	return <>{isLoading ? <LoadingSpinner /> : <Gallery images={data?.galleries[0].images} />}</>;
}
