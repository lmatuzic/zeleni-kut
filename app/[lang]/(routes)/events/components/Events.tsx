'use client';

import Event from '@/app/[lang]/(routes)/events/components/Event';
import useGQLQuery from '@/app/[lang]/hooks/useGQLQuery';
import { EventsDocument, EventsQuery } from '@/app/lib/graphql-codegen/graphql';
import { Locale } from '@/i18.config';
import LoadingSpinner from '../../../(ui)/components/shared/LoadingSpinner';

type EventsProps = {
	locale: Locale;
	translation: {
		title: string;
	};
};

export default function Events({ locale, translation }: EventsProps) {
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
						{/* <h2 className='text-2xl font-medium lg:text-3xl mb-6 text-center'>
							{translation.title}
						</h2> */}

						<div className='flex flex-col lg:flex-row items-center gap-8'>
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
