'use client';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/app/[lang]/(ui)/components/shadcn/Carousel';
import { Dialog, DialogContent } from '@/app/[lang]/(ui)/components/shadcn/Dialog';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

type ImageGalleryProps = {
	images: StaticImageData[];
	className?: string;
};

export default function ImageGallery({ images, className }: ImageGalleryProps) {
	const [open, setOpen] = useState(false);

	return (
		<div className={`grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
			<>
				{images.map((image) => (
					<div key={image.toString()} className='overflow-hidden relative h-60 group'>
						<Image
							src={image}
							alt={image.src}
							fill={true}
							className='object-cover group-hover:opacity-80 transition-opacity cursor-pointer rounded-xl'
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							placeholder='blur'
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
								{images.map((image, index) => (
									<CarouselItem key={index}>
										<div className='overflow-hidden relative h-96 md:h-[40rem] rounded-md'>
											<Image src={image} alt={image.src} fill={true} className='object-cover' />
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
		</div>
	);
}
