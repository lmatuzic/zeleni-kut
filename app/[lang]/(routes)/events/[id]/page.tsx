'use client';

import Gallery from '@/app/[lang]/components/shared/Gallery';
import LoadingSpinner from '@/app/[lang]/components/shared/LoadingSpinner';
import useGQLQuery from '@/app/[lang]/hooks/useGQLQuery';
import { EventDocument, EventQuery } from '@/app/lib/graphql-codegen/graphql';
import { Locale } from '@/i18.config';
import { useState } from 'react';

type EventsDetailsProps = {
	params: {
		lang: Locale;
		id: string;
	};
};

export default function EventsDetails({ params }: EventsDetailsProps) {
	const [open, setOpen] = useState(false);

	const { data, isLoading } = useGQLQuery<EventQuery>(['event', params.id], EventDocument, {
		locales: [params.lang],
		id: params.id,
	});

	return (
		<>
			<h1 className='mb-4 font-medium text-2xl text-zk-green'>{data?.event?.title}</h1>
			<p className='mb-12'>{data?.event?.description.text}</p>

			{isLoading ? <LoadingSpinner /> : <Gallery images={data?.event?.pictures} />}
		</>
	);
}
