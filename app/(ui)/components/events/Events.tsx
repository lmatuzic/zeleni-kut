'use client';

import useGetEvents from '@/app/(routes)/services/menu/hooks/useGetEvents';
import Event from '@/app/(ui)/components/events/Event';
import LoadingSpinner from '../shared/LoadingSpinner';

export default function Events() {
	const { data, isLoading } = useGetEvents();

	return (
		<div className='flex flex-col lg:flex-row items-center justify-center gap-8 mt-8'>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<>
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
				</>
			)}
		</div>
	);
}
