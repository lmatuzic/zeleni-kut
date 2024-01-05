'use client';

import LoadingSpinner from '@/app/[lang]/(ui)/components/shared/LoadingSpinner';
import useGQLQuery from '@/app/[lang]/hooks/useGQLQuery';
import { EventDocument, EventQuery } from '@/app/lib/graphql-codegen/graphql';
import { Locale } from '@/i18.config';

type EventsDetailsProps = {
	params: {
		lang: Locale;
		id: string;
	};
};

export default function EventsDetails({ params }: EventsDetailsProps) {
	const { data, isLoading } = useGQLQuery<EventQuery>(
		['event', params.id],
		EventDocument,
		params.lang,
		params.id
	);

	console.log(data?.event);

	return (
		<>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<>
					<h1 className='mb-4 text-2xl text-zk-green'>{data?.event?.title}</h1>
					<p>{data?.event?.description.text}</p>
				</>
			)}
		</>
	);
}
