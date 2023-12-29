'use client';

import useGetGalleryImages from '@/app/[lang]/(routes)/services/menu/hooks/useGetGalleryImages';
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
	const { data, isLoading } = useGetGalleryImages();

	return (
		<Carousel className='w-full max-w-lg'>
			<CarouselContent>
				{data?.assets.map((image) => (
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
