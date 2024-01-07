'use client';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/app/[lang]/(ui)/components/shadcn/Carousel';
import { Dialog, DialogContent } from '@/app/[lang]/(ui)/components/shadcn/Dialog';
import LoadingSpinner from '@/app/[lang]/(ui)/components/shared/LoadingSpinner';
import useGQLQuery from '@/app/[lang]/hooks/useGQLQuery';
import { EventDocument, EventQuery } from '@/app/lib/graphql-codegen/graphql';
import { Locale } from '@/i18.config';
import Image from 'next/image';
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
			<h1 className='mb-4 text-2xl text-zk-green'>{data?.event?.title}</h1>
			<p>{data?.event?.description.text}</p>

			<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12'>
				{isLoading ? (
					<LoadingSpinner />
				) : (
					<>
						{data?.event?.pictures.map((image) => (
							<div key={image.url} className='overflow-hidden relative h-60 group'>
								<Image
									src={image.url}
									alt={image.fileName}
									fill={true}
									className='object-cover group-hover:opacity-80 transition-opacity cursor-pointer rounded-md'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									placeholder='blur'
									blurDataURL={image.url}
									onClick={(e: React.MouseEvent<HTMLImageElement>) => {
										setOpen(true);
									}}
								/>
							</div>
						))}

						<Dialog open={open} onOpenChange={setOpen}>
							<DialogContent className='p-0 border-none'>
								<Carousel>
									<CarouselContent>
										{data?.event?.pictures.map((pic) => (
											<CarouselItem key={pic.url}>
												<div className='overflow-hidden relative h-96 md:h-[40rem]'>
													<Image
														src={pic.url}
														alt={pic.fileName}
														fill={true}
														className='object-cover'
														blurDataURL={pic.url}
													/>
												</div>
											</CarouselItem>
										))}
									</CarouselContent>

									<CarouselPrevious variant={'secondary'} />
									<CarouselNext variant={'secondary'} />
								</Carousel>
							</DialogContent>
						</Dialog>
					</>
				)}
			</div>
		</>
	);
}
