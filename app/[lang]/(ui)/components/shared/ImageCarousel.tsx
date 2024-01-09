'use client';

import useGQLQuery from '@/app/[lang]/hooks/useGQLQuery';
import { GalleryDocument, GalleryQuery } from '@/app/lib/graphql-codegen/graphql';
import Image from 'next/image';
import { Card, CardContent } from '../shadcn/Card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../shadcn/Carousel';

export default function ImageCarousel() {
	const { data } = useGQLQuery<GalleryQuery>(['galleries'], GalleryDocument);

	return (
		<Carousel className='w-full max-w-lg'>
			<CarouselContent>
				{data?.galleries[0].images.map((image) => (
					<CarouselItem key={image.fileName}>
						<Card>
							<CardContent className='flex aspect-square items-center justify-center p-6 overflow-hidden'>
								<Image src={image.url} alt={image.fileName} width={400} height={400} />
							</CardContent>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>

			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
