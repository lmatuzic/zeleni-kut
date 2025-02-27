'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import { HygraphAssetImage, getImageProperties } from '../../utils/getImageProperties';

type GalleryProps = {
	images?: HygraphAssetImage[] | StaticImageData[];
	className?: string;
};

const Gallery = ({ images, className = '' }: GalleryProps) => {
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(-1);

	const isStaticImage = (image: StaticImageData | HygraphAssetImage): image is StaticImageData =>
		'src' in image;

	const getStaticImageSrc = (image: StaticImageData): string => image.src;
	const getAssetImageSrc = (image: HygraphAssetImage): string => image.url;

	const slides = images?.map((image) => {
		const src = isStaticImage(image)
			? getStaticImageSrc(image as StaticImageData)
			: getAssetImageSrc(image as HygraphAssetImage);

		return { src };
	});

	return (
		<>
			<div className={`grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
				{images?.map((image, index) => {
					return (
						<div
							key={getImageProperties(image).key}
							className='overflow-hidden relative h-60 group'
							onClick={() => setIndex(index)}
						>
							<Image
								src={getImageProperties(image).src}
								alt={getImageProperties(image).alt}
								fill={true}
								className='object-cover group-hover:opacity-80 transition-opacity cursor-pointer rounded-md'
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
								placeholder='blur'
								blurDataURL={getImageProperties(image).src}
								onClick={() => setOpen(true)}
							/>
						</div>
					);
				})}
			</div>

			<Lightbox
				open={open}
				close={() => setOpen(false)}
				plugins={[Zoom]}
				slides={slides}
				index={index}
			/>
		</>
	);
};

export default Gallery;
