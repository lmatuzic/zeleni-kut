import { getDictionary } from '@/app/dictionaries/dictionary';
import { Locale } from '@/i18.config';
import PdfMenu from './components/PdfMenu';

export default async function Menu({ params: { lang } }: { params: { lang: Locale } }) {
	const { page } = await getDictionary(lang);

	return (
		<div>
			<h1 className='mb-8 text-2xl font-medium text-zk-green'>{page.restaurant.title}</h1>
			<p className='mb-8 max-w-3xl'>{page.restaurant.infoText}</p>
			<PdfMenu locale={lang} translation={page.restaurant} />
			{/* <MenuList locale={lang} translation={page.menu} /> */}
		</div>
	);
}
