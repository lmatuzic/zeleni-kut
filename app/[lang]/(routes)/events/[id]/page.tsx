'use client';

import Gallery from '@/app/[lang]/components/shared/Gallery';
import LoadingSpinner from '@/app/[lang]/components/shared/LoadingSpinner';
import useGQLQuery from '@/app/[lang]/hooks/useGQLQuery';
import { EventDocument, EventQuery } from '@/app/lib/graphql-codegen/graphql';
import { Locale } from '@/i18.config';
import { RichText } from '@graphcms/rich-text-react-renderer';

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
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<div className='event border p-4 sm:p-8 rounded'>
					<RichText content={data?.event?.description.json} />
					<Gallery images={data?.event?.pictures} className='mt-12' />
				</div>
			)}
		</>
	);
}
