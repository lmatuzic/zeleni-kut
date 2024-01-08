import { getDictionary } from '@/app/dictionaries/dictionary';
import FetchedImageGallery from './components/FetchedImageGallery';
import { Locale } from '@/i18.config';

export default async function GalleryPage({ params: { lang } }: { params: { lang: Locale } }) {
	const { page } = await getDictionary(lang);

	return (
		<>
			<h1 className='mb-6 font-semibold text-2xl text-zk-green'>{page.gallery.title}</h1>
			<FetchedImageGallery />
		</>
	);
}
