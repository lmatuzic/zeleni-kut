'use client';

import Gallery from '@/app/[lang]/components/shared/Gallery';
import LoadingSpinner from '@/app/[lang]/components/shared/LoadingSpinner';
import useGQLQuery from '@/app/[lang]/hooks/useGQLQuery';
import { EventDocument, EventQuery } from '@/app/lib/graphql-codegen/graphql';
import { Locale } from '@/i18.config';
import ReactMarkdown from 'react-markdown';

type EventsDetailsProps = {
	params: {
		lang: Locale;
		id: string;
	};
};

export default function EventsDetails({ params }: EventsDetailsProps) {
	const { data, isLoading } = useGQLQuery<EventQuery>(['event', params.id], EventDocument, {
		locales: [params.lang],
		id: params.id,
	});

	return (
		<>
			<ReactMarkdown className={'mb-12'}>{data?.event?.description.markdown}</ReactMarkdown>
			{isLoading ? <LoadingSpinner /> : <Gallery images={data?.event?.pictures} />}
		</>
	);
}
