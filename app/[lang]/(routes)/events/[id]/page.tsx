'use client';

import LoadingSpinner from '@/app/[lang]/(ui)/components/shared/LoadingSpinner';
import useGQLQuery from '@/app/[lang]/hooks/useGQLQuery';
import { EventDocument, EventQuery } from '@/app/lib/graphql-codegen/graphql';
import { Locale } from '@/i18.config';
import Image from 'next/image';

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
			<h1 className='mb-4 text-2xl text-zk-green'>{data?.event?.title}</h1>
			<p>{data?.event?.description.text}</p>

			<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12'>
				{isLoading ? (
					<LoadingSpinner />
				) : (
					data?.event?.pictures.map((pic) => (
						<div key={pic.url} className='overflow-hidden relative h-60 group'>
							<Image
								src={pic.url}
								alt={pic.fileName}
								fill={true}
								className='object-cover group-hover:opacity-80 transition-opacity cursor-pointer rounded-md'
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
								placeholder='blur'
								blurDataURL={pic.url}
							/>
						</div>
					))
				)}
			</div>
		</>
	);
}
