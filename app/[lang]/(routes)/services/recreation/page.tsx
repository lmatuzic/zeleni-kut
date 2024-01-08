import ImageGallery from '@/app/[lang]/(ui)/components/shared/ImageGallery';
import { getDictionary } from '@/app/dictionaries/dictionary';
import { Locale } from '@/i18.config';
import img1 from '@/app/[lang]/assets/images/recreation/beach.jpg';
import img2 from '@/app/[lang]/assets/images/recreation/canue.jpg';
import img3 from '@/app/[lang]/assets/images/recreation/fishing.jpg';
import img4 from '@/app/[lang]/assets/images/recreation/volleyball.jpg';

export default async function Recreation({ params: { lang } }: { params: { lang: Locale } }) {
	const { page } = await getDictionary(lang);

	const images = [img1, img2, img3, img4];

	return (
		<div>
			<h1 className='mb-6 text-2xl text-zk-green'>{page.recreation.title}</h1>
			<p>{page.recreation.infoText}</p>

			<ImageGallery images={images} className='mt-8' />
		</div>
	);
}
