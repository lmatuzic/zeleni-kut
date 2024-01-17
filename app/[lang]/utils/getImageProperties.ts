import { StaticImageData } from 'next/image';

export type HygraphAssetImage = {
	__typename?: 'Asset' | undefined;
	fileName: string;
	url: string;
};

export const getImageProperties = (image: StaticImageData | HygraphAssetImage) => {
	if ('src' in image) {
		const staticImage = image as StaticImageData;
		return { key: staticImage.src, src: staticImage.src, alt: '' };
	}

	const assetImage = image as HygraphAssetImage;
	return { key: assetImage.url, src: assetImage.url, alt: assetImage.fileName };
};
