'use client';

import Event from '@/app/[lang]/(routes)/events/components/Event';
import useGQLQuery from '@/app/[lang]/hooks/useGQLQuery';
import { EventsDocument, EventsQuery } from '@/app/lib/graphql-codegen/graphql';
import { Locale } from '@/i18.config';
import LoadingSpinner from '../../../components/shared/LoadingSpinner';

type EventsProps = {
	locale: Locale;
};

export default function Events({ locale }: EventsProps) {
	const { data, isLoading } = useGQLQuery<EventsQuery>(['events', locale], EventsDocument, {
		locales: [locale],
	});

	return (
		<>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<>
					<div className='w-full p-4 lg:p-8 border border-solid bg-sectionBg rounded-xl'>
						<div className='flex flex-col lg:flex-row gap-8'>
							{data?.events.map((event) => (
								<Event
									key={event.id}
									id={event.id}
									title={event.title}
									shortDescription={event.shortDescription}
									dateAndTime={event.dateAndTime}
									locale={event.locale}
								/>
							))}
						</div>
					</div>
				</>
			)}
		</>
	);
}
