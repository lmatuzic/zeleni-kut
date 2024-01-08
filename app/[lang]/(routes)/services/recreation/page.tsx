import { getDictionary } from '@/app/dictionaries/dictionary';
import { Locale } from '@/i18.config';

export default async function Recreation({ params: { lang } }: { params: { lang: Locale } }) {
	const { page } = await getDictionary(lang);

	return (
		<div>
			<h1 className='mb-6 text-2xl text-zk-green'>{page.recreation.title}</h1>
			<p>{page.recreation.infoText}</p>
		</div>
	);
}
