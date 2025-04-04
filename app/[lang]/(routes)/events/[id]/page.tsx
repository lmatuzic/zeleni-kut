'use client';;
import { use } from "react";

import Gallery from '@/app/[lang]/components/shared/Gallery';
import LoadingSpinner from '@/app/[lang]/components/shared/LoadingSpinner';
import useGQLQuery from '@/app/[lang]/hooks/useGQLQuery';
import { EventDocument, EventQuery } from '@/app/lib/graphql-codegen/graphql';
import { Locale } from '@/i18.config';
import { RichText } from '@graphcms/rich-text-react-renderer';

type EventsDetailsProps = {
	params: Promise<{
		lang: Locale;
		id: string;
	}>;
};

export default function EventsDetails(props: EventsDetailsProps) {
    const params = use(props.params);
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
