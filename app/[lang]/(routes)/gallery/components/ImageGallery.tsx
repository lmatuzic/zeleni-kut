'use client';

import LoadingSpinner from '@/app/[lang]/(ui)/components/shared/LoadingSpinner';
import useGetGalleryImages from '../../services/menu/hooks/useGetGalleryImages';
import Image from 'next/image';

export default function ImageGallery() {
	const { data, isLoading } = useGetGalleryImages();

	return (
		<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				data?.assets.map((image) => (
					<div key={image.url} className='overflow-hidden relative h-60 group'>
						<Image
							src={image.url}
							alt={image.fileName}
							fill={true}
							className='object-cover group-hover:opacity-80 transition-opacity cursor-pointer'
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							placeholder='blur'
							blurDataURL={image.url}
						/>
					</div>
				))
			)}
		</div>
	);
}
