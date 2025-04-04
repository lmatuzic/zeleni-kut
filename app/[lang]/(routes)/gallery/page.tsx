import { getDictionary } from '@/app/dictionaries/dictionary';
import FetchedImageGallery from './components/FetchedImageGallery';
import { Locale } from '@/i18.config';

export default async function GalleryPage(props: { params: Promise<{ lang: Locale }> }) {
    const params = await props.params;

    const {
        lang
    } = params;

    const { page } = await getDictionary(lang);

    return (
		<>
			<h1 className='mb-6 font-medium text-2xl text-zk-green'>{page.gallery.title}</h1>
			<FetchedImageGallery />
		</>
	);
}
